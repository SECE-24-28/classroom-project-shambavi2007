@echo off
echo Setting up RechargeMax Pro...

echo 1. Installing backend dependencies...
cd backend
call npm install

echo 2. Installing frontend dependencies...
cd ../react-recharge-app
call npm install

echo 3. Seeding database...
cd ../backend
call npm run seed

echo 4. Building React app...
cd ../react-recharge-app
call npm run build

echo 5. Starting application...
cd ../backend
call npm start