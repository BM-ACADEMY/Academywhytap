import os
import sys
from pathlib import Path
from mongoengine import connect
from dotenv import load_dotenv

# Add current dir to path
sys.path.append(os.getcwd())

# Load env
BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env_local")

# Connect to MongoDB
MONGO_URI = os.getenv("MONGO_LOCAL_URI")
connect(host=MONGO_URI, alias="default")

# Import Model
from users.models import User

def create_admin():
    email = "admin@gmail.com"
    password = "your_password_here" # I'll use a placeholder, you can change it or I can set it for you
    
    # Check if exists
    user = User.objects(email=email).first()
    if not user:
        user = User(
            name="Admin User",
            email=email,
            phone="0000000000",
            role="admin"
        )
    
    user.role = "admin" # Ensure role is admin
    user.set_password("admin123") # Setting a simple password for testing
    user.save()
    print(f"✅ User {email} is now an ADMIN in MongoDB with password: admin123")

if __name__ == "__main__":
    create_admin()
