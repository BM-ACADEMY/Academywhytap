import os
import sys
from pathlib import Path
from mongoengine import connect
from werkzeug.security import generate_password_hash
from dotenv import load_dotenv

# Add the current directory to sys.path to import the User model
sys.path.append(os.getcwd())

# Load environment variables
BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env_local")

# MongoDB Connection Logic (matching your settings.py)
MONGO_URI = os.getenv("MONGO_LOCAL_URI")
if not MONGO_URI:
    print("❌ Error: MONGO_LOCAL_URI not found in .env_local")
    sys.exit(1)

connect(host=MONGO_URI, alias="default")

# Import the User model after connection
from users.models import User

def create_admin(name, email, password, phone):
    if User.objects(email=email).first():
        print(f"⚠️ User with email {email} already exists.")
        return

    admin = User(
        name=name,
        email=email,
        phone=phone,
        role="admin"
    )
    admin.set_password(password)
    admin.save()
    print(f"✅ Admin created successfully: {email}")

if __name__ == "__main__":
    # You can change these details here:
    create_admin(
        name="Super Admin",
        email="admin@example.com",
        password="adminpassword123",
        phone="0000000000"
    )
