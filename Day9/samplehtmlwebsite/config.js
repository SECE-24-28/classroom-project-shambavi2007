// API Configuration
const API_CONFIG = {
    BASE_URL: 'https://api.rechargeservice.com/v1',
    API_KEY: 'AIzaSyDE1dhaiJFuX2H_mxhs9zIBy1q5sGzl7zk',
    ENDPOINTS: {
        RECHARGE: '/recharge',
        PLANS: '/plans',
        OPERATORS: '/operators',
        TRANSACTION: '/transaction'
    }
};

// API Functions
async function makeAPICall(endpoint, data) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_CONFIG.API_KEY}`,
                'X-API-Key': API_CONFIG.API_KEY
            },
            body: JSON.stringify(data)
        });
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: 'Network error' };
    }
}