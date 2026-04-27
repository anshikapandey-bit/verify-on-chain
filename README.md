Verify-On-Chain 🔗

A blockchain-based certificate verification system that prevents fake certificates using decentralized principles.

🚀 Features

- Upload certificates (Admin)
- Generate unique certificate ID
- Verify certificates using ID
- Simulated blockchain + IPFS storage
- Secure admin authentication (JWT)

🛠 Tech Stack

- Frontend: React
- Backend: FastAPI (Python)
- Database: MongoDB
- Blockchain: Ethereum (simulated)
- Storage: IPFS (simulated)

📌 How It Works

1. Admin uploads certificate
2. System generates unique ID + hash
3. Data stored securely
4. User verifies using certificate ID

▶️ Run Locally

Backend

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Frontend

cd frontend
npm install
npm start

