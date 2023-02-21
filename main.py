import requests
import json

response = requests.get('http://paulis.online/scores.json')
data = json.loads(response.text)
new_data = json.dumps(data)
response = requests.put('http://paulis.online/scores.json', data=new_data)
