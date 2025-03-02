import os
import glob
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
)

image_folder = "./media/images"

image_paths = glob.glob(os.path.join(image_folder, "*.*")) 

for image_path in image_paths:
    result = cloudinary.uploader.upload(image_path)
    print(f"Uploaded {image_path}: {result['secure_url']}")
