import os
from openai import OpenAI

def get_cologne_array():
    cologne_name = input("Enter the cologne name: ")
    client = OpenAI( api_key=os.environ.get("OPENAI_API_KEY"),  )
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
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": message_content,
            }
        ],
        model="gpt-4o",
    )

    return chat_completion.choices[0].message.content


