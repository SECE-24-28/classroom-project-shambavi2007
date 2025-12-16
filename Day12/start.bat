@echo off
echo Building React app...
cd react-recharge-app
call npm run build
cd ..

echo Starting backend server...
cd backend
call npm start