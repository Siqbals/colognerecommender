import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/get-cologne-array', methods=['POST'])
def get_cologne_array():
    data = request.json
    cologne_name = data.get("cologne_name")
    
    if not cologne_name:
        return jsonify({"error": "cologne_name is required"}), 400

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    message_content = f"""for a cologne called {cologne_name}, please output an array with the following values. each array index should be a sub-array, even if there is only one value
    index 1:
    0 - winter
    1 - summer

    index 2:
    0 - date night
    1 - everyday
    2 - special occasion
    3 - night out 
    4 - work
    5 - gym

    index 3:
    0 - lasts 1-2 hours
    1 - lasts 2-4 hours
    2 - lasts 6+ hours

    index 4:
    0 - sweet
    1 - spicy
    2 - gourmand
    3 - floral

    index 5:
    any number that will determine how popular it is 

    index 6:
    0 - the cologne is not recognizable
    1 - the cologne is recognizable

    ONLY OUTPUT THE ARRAY ONLY AND NO OTHER TEXT
    """
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": message_content,
                }
            ],
            model="gpt-4o",
        )
        print(chat_completion.choices[0])
        return jsonify({"array": chat_completion.choices[0].message.content}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
