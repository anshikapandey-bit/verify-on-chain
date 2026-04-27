from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Fake database
certificates = {
    "CERT123": {
        "name": "Test User",
        "course": "Blockchain Basics",
        "status": "Valid"
    }
}

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.get("/verify/{cert_id}")
def verify(cert_id: str):
    cert = certificates.get(cert_id)
    if cert:
        return cert
    return {"error": "Certificate not found"}