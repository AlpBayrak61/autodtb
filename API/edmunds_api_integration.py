
import requests

# Base URL for CarAPI
BASE_URL = "https://carapi.app/api/"

# Function to fetch car makes
def get_car_makes():
    url = f"{BASE_URL}makes?api_token={{api_token}}"
    response = requests.get(url)
    
    if response.status_code == 200:
        car_makes = response.json()['data']
        for make in car_makes:
            print(f"Make: {make['name']}")
        return car_makes
    else:
        print(f"Error: {response.status_code}")
        return None

# Function to fetch car models for a specific make
def get_car_models(make):
    url = f"{BASE_URL}models?make={make}&api_token={{api_token}}"
    response = requests.get(url)
    
    if response.status_code == 200:
        car_models = response.json()['data']
        for model in car_models:
            print(f"Model: {model['name']}")
        return car_models
    else:
        print(f"Error: {response.status_code}")
        return None

# Function to fetch car details for a specific model
def get_car_details(make, model):
    url = f"{BASE_URL}trims?make={make}&model={model}&api_token={{api_token}}"
    response = requests.get(url)
    
    if response.status_code == 200:
        car_details = response.json()['data']
        for detail in car_details:
            print(f"Trim: {detail['name']}")
        return car_details
    else:
        print(f"Error: {response.status_code}")
        return None

# Example usage
if __name__ == "__main__":
    api_token = '0bb7d5ee-e119-408d-81dd-37bd4f015293'  # Replace with your CarAPI token
    makes = get_car_makes()
    
    if makes:
        selected_make = makes[0]['name']  # Example: selecting the first make
        models = get_car_models(selected_make)
        
        if models:
            selected_model = models[0]['name']  # Example: selecting the first model
            get_car_details(selected_make, selected_model)
