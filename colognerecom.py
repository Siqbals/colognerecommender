import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://colognestat.netlify.app"}})


@app.route('/get-cologne-array', methods=['POST'])
def get_cologne_array():
    data = request.json
    cologne_name = data.get("cologne_name")
    
    if not cologne_name:
        return jsonify({"error": "cologne_name is required"}), 400

    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    message_content = f"""for a cologne called {cologne_name}, please output an array where 0 is for false, and 1 is for true, each index should be a subarray for index 5 you may use any number to represent how popular it is 
    index 1:
    winter
    summer

    index 2:
    date night
    everyday
    special occasion
    night out 
    work 
    gym 

    index 3:
    lasts 1-2 hours
    lasts 2-4 hours
    lasts 6+ hours

    index 4:
    sweet
    spicy
    gourmand
    floral

    index 5:
    any number that will determine its overall rating, on a scale of 1 to 100, 100 being best and 1 being worst

   index 6:
   provide a short description of the cologne


ONLY OUTPUT THE ARRAY AND NOTHING ELSE
OUTPUT THE ARRAY AS AN ARRAY DATATYPE
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
        
        # Extract the content of the completion
        raw_response = chat_completion.choices[0].message.content
        
        # Clean the response by removing backticks and parsing as JSON
        cleaned_response = raw_response.strip().strip('```json').strip('```')
        array = json.loads(cleaned_response)
        
        return jsonify({"array": array}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
