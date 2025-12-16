// Complete plans data from mobile_plans_50.json + additional plans
const allPlansData = [
  // Vi Plans
  {"operator": "Vi", "category": "Popular", "price": 199, "validity": "28 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Vi", "category": "Popular", "price": 249, "validity": "28 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Vi", "category": "Popular", "price": 299, "validity": "28 days", "data": "2.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Vi", "category": "Popular", "price": 399, "validity": "28 days", "data": "3GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Premium", "benefits": ["3GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Vi", "category": "Data", "price": 19, "validity": "1 day", "data": "1GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["1GB data", "Works with active plan"]},
  {"operator": "Vi", "category": "Data", "price": 65, "validity": "28 days", "data": "4GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["4GB data", "Works with active plan"]},
  {"operator": "Vi", "category": "Data", "price": 118, "validity": "28 days", "data": "12GB", "calls": "No", "sms": "No", "type": "data", "popular": true, "highlight": "Extra Data Pack", "benefits": ["12GB data", "Works with active plan"]},
  {"operator": "Vi", "category": "Unlimited", "price": 549, "validity": "56 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Vi", "category": "Unlimited", "price": 999, "validity": "84 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Long Validity", "benefits": ["2GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Vi", "category": "Talktime", "price": 10, "validity": "NA", "data": "No", "calls": "₹7.50", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹7.50 talktime"]},
  {"operator": "Vi", "category": "Talktime", "price": 20, "validity": "NA", "data": "No", "calls": "₹14.95", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹14.95 talktime"]},
  {"operator": "Vi", "category": "Talktime", "price": 100, "validity": "NA", "data": "No", "calls": "₹75.00", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹75.00 talktime"]},
  
  // Airtel Plans
  {"operator": "Airtel", "category": "Popular", "price": 179, "validity": "28 days", "data": "1GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Best Value", "benefits": ["1GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Airtel", "category": "Popular", "price": 199, "validity": "28 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Airtel", "category": "Popular", "price": 249, "validity": "28 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Airtel", "category": "Popular", "price": 399, "validity": "28 days", "data": "2.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Premium", "benefits": ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Airtel", "category": "Data", "price": 58, "validity": "28 days", "data": "3GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["3GB data", "Works with active plan"]},
  {"operator": "Airtel", "category": "Data", "price": 118, "validity": "28 days", "data": "12GB", "calls": "No", "sms": "No", "type": "data", "popular": true, "highlight": "Extra Data Pack", "benefits": ["12GB data", "Works with active plan"]},
  {"operator": "Airtel", "category": "Unlimited", "price": 549, "validity": "56 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Airtel", "category": "Unlimited", "price": 719, "validity": "84 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Airtel", "category": "Talktime", "price": 10, "validity": "NA", "data": "No", "calls": "₹7.47", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹7.47 talktime"]},
  {"operator": "Airtel", "category": "Talktime", "price": 50, "validity": "28 days", "data": "No", "calls": "₹38.52", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹38.52 talktime"]},
  
  // Jio Plans
  {"operator": "Jio", "category": "Popular", "price": 179, "validity": "28 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Best Value", "benefits": ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Jio", "category": "Popular", "price": 239, "validity": "28 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Jio", "category": "Popular", "price": 249, "validity": "28 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Jio", "category": "Popular", "price": 349, "validity": "28 days", "data": "2.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Premium", "benefits": ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "Jio", "category": "Data", "price": 19, "validity": "1 day", "data": "1GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["1GB data", "Works with active plan"]},
  {"operator": "Jio", "category": "Data", "price": 65, "validity": "28 days", "data": "4GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["4GB data", "Works with active plan"]},
  {"operator": "Jio", "category": "Data", "price": 155, "validity": "30 days", "data": "24GB", "calls": "No", "sms": "No", "type": "data", "popular": true, "highlight": "Extra Data Pack", "benefits": ["24GB data", "Works with active plan"]},
  {"operator": "Jio", "category": "Unlimited", "price": 549, "validity": "84 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Long Validity", "benefits": ["2GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Jio", "category": "Unlimited", "price": 666, "validity": "84 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "Jio", "category": "Talktime", "price": 10, "validity": "NA", "data": "No", "calls": "₹7.36", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹7.36 talktime"]},
  {"operator": "Jio", "category": "Talktime", "price": 50, "validity": "28 days", "data": "No", "calls": "₹39.37", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹39.37 talktime"]},
  
  // BSNL Plans
  {"operator": "BSNL", "category": "Popular", "price": 149, "validity": "28 days", "data": "1GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Best Value", "benefits": ["1GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "BSNL", "category": "Popular", "price": 199, "validity": "28 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "BSNL", "category": "Popular", "price": 249, "validity": "28 days", "data": "2GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Best Value", "benefits": ["2GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "BSNL", "category": "Popular", "price": 299, "validity": "28 days", "data": "2.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Premium", "benefits": ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
  {"operator": "BSNL", "category": "Data", "price": 19, "validity": "1 day", "data": "1GB", "calls": "No", "sms": "No", "type": "data", "popular": false, "highlight": "Extra Data Pack", "benefits": ["1GB data", "Works with active plan"]},
  {"operator": "BSNL", "category": "Data", "price": 97, "validity": "28 days", "data": "10GB", "calls": "No", "sms": "No", "type": "data", "popular": true, "highlight": "Extra Data Pack", "benefits": ["10GB data", "Works with active plan"]},
  {"operator": "BSNL", "category": "Unlimited", "price": 499, "validity": "84 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": false, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "BSNL", "category": "Unlimited", "price": 666, "validity": "84 days", "data": "1.5GB/day", "calls": "Unlimited", "sms": "100/day", "type": "prepaid", "popular": true, "highlight": "Long Validity", "benefits": ["1.5GB/day", "Unlimited calls", "Long validity"]},
  {"operator": "BSNL", "category": "Talktime", "price": 10, "validity": "NA", "data": "No", "calls": "₹8.11", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹8.11 talktime"]},
  {"operator": "BSNL", "category": "Talktime", "price": 20, "validity": "NA", "data": "No", "calls": "₹14.95", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹14.95 talktime"]},
  {"operator": "BSNL", "category": "Talktime", "price": 100, "validity": "NA", "data": "No", "calls": "₹81.75", "sms": "No", "type": "talktime", "popular": false, "highlight": "Talktime Recharge", "benefits": ["₹81.75 talktime"]}
];

let currentOperator = 'airtel';
let currentCategory = 'popular';

// Load plans directly from local data
function loadPlans() {
    renderPlans();
}

function renderPlans() {
    const container = document.getElementById('plansContainer');
    
    if (!container) {
        console.error('Plans container not found');
        return;
    }
    
    // Filter plans by current operator and category
    let filteredPlans = allPlansData.filter(plan => {
        const operatorMatch = plan.operator.toLowerCase() === currentOperator.toLowerCase();
        
        // Map category names to match button data
        let categoryToMatch = currentCategory.toLowerCase();
        
        const categoryMatch = plan.category.toLowerCase() === categoryToMatch;
        return operatorMatch && categoryMatch;
    });
    
    if (filteredPlans.length === 0) {
        container.innerHTML = '<div class="no-plans">No plans available for this category</div>';
        return;
    }
    
    container.innerHTML = filteredPlans.map(plan => `
        <div class="plan-card ${plan.popular ? 'popular' : ''}">
            <div class="plan-type">${plan.type}</div>
            ${plan.highlight ? `<div class="plan-highlight">${plan.highlight}</div>` : ''}
            <div class="plan-price">₹${plan.price}</div>
            <div class="plan-validity">${plan.validity}</div>
            <ul class="plan-benefits">
                ${plan.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <button class="plan-btn" onclick="selectPlan(${plan.price}, '${plan.operator}')">
                Recharge Now
            </button>
        </div>
    `).join('');
}

function selectPlan(amount, operator) {
    localStorage.setItem('selectedPlan', JSON.stringify({ amount, operator }));
    window.location.href = 'recharge.html';
}

function showError(message) {
    const container = document.getElementById('plansContainer');
    container.innerHTML = `<div class="error-message">${message}</div>`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing plans...');
    console.log('Total plans available:', allPlansData.length);
    
    loadPlans();
    
    // Operator selection
    document.querySelectorAll('.operator-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.operator-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentOperator = this.dataset.operator;
            console.log('Selected operator:', currentOperator);
            renderPlans();
        });
    });
    
    // Category selection
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            console.log('Selected category:', currentCategory);
            renderPlans();
        });
    });
});