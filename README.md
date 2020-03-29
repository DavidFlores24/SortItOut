# SortItOut
Recycling chatbot app that uses AI for image recognition

# Project Setup
The project was created using:
- **NodeJS**
- **Express**

And it has the following requirements:
- **Node v12.5.0**
- **Express v4.16.1**

It also requires an API Key for the following APIs:
- **Azure Storage** https://azure.microsoft.com/en-gb/services/storage/
- **Azure Cognitive Services Custom Vision** https://www.customvision.ai/
- **Google Maps** https://developers.google.com/maps/documentation

These *Keys* and *endpoints* will have to be stored in a `.env` file so that the project can read them using `dotenv` https://github.com/motdotla/dotenv#readme
The `.env` file must have the following format:
```
NODE_ENV=develop || release
PORT=3000

CLOUD_ACCOUNT_NAME=<NAME_OF_THE_AZURE_STORAGE_ACCOUNT>
CLOUD_ACCOUNT_KEY=<AZURE_STORAGE_ACCOUNT_API_KEY>

PREDICTION_KEY=<PREDICTION_KEY_FOR_CUSTOM_VISION>
PREDICTION_RESOURCE_ID=<RESOURCE_ID_FOR_CUSTOM_VISION>
PREDICTION_ENDPOINT=<CUSTOM_VISION_ENDPOINT>

PREDICTION_MATERIAL_ID=<PROJECT_ID_FOR_MATERIALS_MODEL>
PREDICTION_MATERIAL_MODEL=<NAME_OF_MATERIALS_MODEL>

PREDICTION_TYPE_ID=<PROJECT_ID_FOR_TYPES_MODEL>
PREDICTION_TYPE_MODEL=<NAME_OF_TYPES_MODEL>

GOOGLE_MAPS_KEY=<GOOGLE_MAPS_API_KEY>
GOOGLE_MAPS_ENDPOINT=https://maps.googleapis.com/maps/api/geocode/json
```

# Usage
**/services/create-image-url**
- **Method:**

  `POST`

- **Data Params:**

  **Required:**

    `file:[Image encoded in Base64]`

- **Success Response:**

  **Code:** 200
  **Content:**
    `{ name:<NAME_OF_THE_BLOB_FOR_THE_IMAGE>, url:<URL_WHERE_IMAGE_IS_STORED> }`
   
- **Error Response:**

  **Code:** 400
  **Content**:
    `{ error: bad request }`


**/recycle-requests**
- **Method:**

	`POST`

- **Data Params:**

	**Required:**
  
      user_id: String
      image_url: String
      upload_date: Date 
      latitude: String
      longitude: String

- **Success Response:**

	**Code:** 200

	**Content:**
```
    request_id: String
    is_recyclable: boolean
    container_material: String
    container_type: String
    council: String
    fact: String
```

- **Error Response:**
	
	**Code:** 400
	**Content:**
		`{ error: bad request }`
