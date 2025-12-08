const plans = {
    airtel: [
        {price: 199, validity: "28 days", benefits: ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 299, validity: "28 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 399, validity: "28 days", benefits: ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 599, validity: "84 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]}
    ],
    jio: [
        {price: 179, validity: "28 days", benefits: ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 249, validity: "28 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 349, validity: "28 days", benefits: ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 549, validity: "84 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]}
    ],
    vi: [
        {price: 189, validity: "28 days", benefits: ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 269, validity: "28 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 359, validity: "28 days", benefits: ["2.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 559, validity: "84 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]}
    ],
    bsnl: [
        {price: 149, validity: "28 days", benefits: ["1GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 199, validity: "28 days", benefits: ["1.5GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 299, validity: "28 days", benefits: ["2GB/day", "Unlimited calls", "100 SMS/day"]},
        {price: 499, validity: "84 days", benefits: ["1.5GB/day", "Unlimited calls", "100 SMS/day"]}
    ]
};

function showPlans(operator) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const plansGrid = document.getElementById('plansGrid');
    plansGrid.innerHTML = '';
    
    plans[operator].forEach(plan => {
        const planCard = document.createElement('div');
        planCard.className = 'plan-card';
        planCard.innerHTML = `
            <div class="plan-price">₹${plan.price}</div>
            <div class="plan-validity">${plan.validity}</div>
            <ul class="plan-benefits">
                ${plan.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <button class="select-plan-btn" onclick="selectPlan(${plan.price})">Select Plan</button>
        `;
        plansGrid.appendChild(planCard);
    });
}

function selectPlan(amount) {
    localStorage.setItem('selectedAmount', amount);
    window.location.href = 'recharge.html';
}

// Load Airtel plans by default
document.addEventListener('DOMContentLoaded', () => {
    showPlans('airtel');
});