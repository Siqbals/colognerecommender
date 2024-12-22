import requests

url = "http://127.0.0.1:5000/get-cologne-array"
data = {
    "cologne_name": "Acqua Di Gio"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=data, headers=headers)
print("Response:", response.json())
