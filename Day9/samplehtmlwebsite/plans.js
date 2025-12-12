const plansData = {
    airtel: {
        popular: [
            { price: 199, validity: "28 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Best Value", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "Airtel Thanks benefits", "Free Hellotunes"] },
            { price: 299, validity: "28 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", popular: true, benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "Disney+ Hotstar Mobile", "Airtel Thanks benefits"] },
            { price: 399, validity: "28 days", data: "2.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["2.5GB data per day", "Unlimited voice calls", "100 SMS per day", "Disney+ Hotstar Mobile", "Amazon Prime Video Mobile"] },
            { price: 599, validity: "84 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Long Validity", benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "Disney+ Hotstar Mobile"] }
        ],
        data: [
            { price: 65, validity: "28 days", data: "4GB", calls: "No", sms: "No", type: "data", benefits: ["4GB total data", "28 days validity", "Data only pack", "No voice/SMS"] },
            { price: 118, validity: "28 days", data: "12GB", calls: "No", sms: "No", type: "data", benefits: ["12GB total data", "28 days validity", "Data only pack", "High speed 4G"] },
            { price: 181, validity: "30 days", data: "25GB", calls: "No", sms: "No", type: "data", popular: true, benefits: ["25GB total data", "30 days validity", "Data only pack", "4G speed"] }
        ],
        unlimited: [
            { price: 719, validity: "84 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "Disney+ Hotstar Mobile"] },
            { price: 1799, validity: "365 days", data: "24GB", calls: "Unlimited", sms: "3600", type: "prepaid", highlight: "Annual Plan", benefits: ["24GB total data", "Unlimited voice calls", "3600 SMS", "365 days validity", "Best for light users"] }
        ],
        talktime: [
            { price: 10, validity: "N/A", data: "No", calls: "₹7.47", sms: "No", type: "talktime", benefits: ["₹7.47 talktime", "Instant recharge", "No validity extension"] },
            { price: 20, validity: "N/A", data: "No", calls: "₹14.95", sms: "No", type: "talktime", benefits: ["₹14.95 talktime", "Instant recharge", "No validity extension"] },
            { price: 50, validity: "28 days", data: "No", calls: "₹38.52", sms: "No", type: "talktime", benefits: ["₹38.52 talktime", "28 days validity", "Emergency recharge"] }
        ]
    },
    jio: {
        popular: [
            { price: 179, validity: "28 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Best Value", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "JioApps subscription", "Complimentary JioTV"] },
            { price: 239, validity: "28 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", popular: true, benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "Netflix Mobile", "JioApps subscription"] },
            { price: 349, validity: "28 days", data: "2.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["2.5GB data per day", "Unlimited voice calls", "100 SMS per day", "Netflix Mobile", "Disney+ Hotstar Mobile"] },
            { price: 549, validity: "84 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Long Validity", benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "JioApps subscription"] }
        ],
        data: [
            { price: 19, validity: "1 day", data: "1GB", calls: "No", sms: "No", type: "data", benefits: ["1GB data", "1 day validity", "Emergency data pack", "High speed 4G"] },
            { price: 69, validity: "28 days", data: "6GB", calls: "No", sms: "No", type: "data", benefits: ["6GB total data", "28 days validity", "Data only pack", "4G speed"] },
            { price: 155, validity: "30 days", data: "24GB", calls: "No", sms: "No", type: "data", popular: true, benefits: ["24GB total data", "30 days validity", "Data only pack", "High speed 4G"] }
        ],
        unlimited: [
            { price: 666, validity: "84 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "JioApps subscription"] },
            { price: 1559, validity: "336 days", data: "24GB", calls: "Unlimited", sms: "3600", type: "prepaid", highlight: "Annual Plan", benefits: ["24GB total data", "Unlimited voice calls", "3600 SMS", "336 days validity", "JioApps subscription"] }
        ],
        talktime: [
            { price: 10, validity: "N/A", data: "No", calls: "₹7.36", sms: "No", type: "talktime", benefits: ["₹7.36 talktime", "Instant recharge", "No validity extension"] },
            { price: 20, validity: "N/A", data: "No", calls: "₹14.72", sms: "No", type: "talktime", benefits: ["₹14.72 talktime", "Instant recharge", "No validity extension"] },
            { price: 50, validity: "28 days", data: "No", calls: "₹39.37", sms: "No", type: "talktime", benefits: ["₹39.37 talktime", "28 days validity", "Emergency recharge"] }
        ]
    },
    vi: {
        popular: [
            { price: 189, validity: "28 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Best Value", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "Vi Movies & TV", "Weekend data rollover"] },
            { price: 269, validity: "28 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", popular: true, benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "Vi Movies & TV", "Disney+ Hotstar Mobile"] },
            { price: 359, validity: "28 days", data: "2.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["2.5GB data per day", "Unlimited voice calls", "100 SMS per day", "Netflix Mobile", "Vi Movies & TV"] },
            { price: 559, validity: "84 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Long Validity", benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "Vi Movies & TV"] }
        ],
        data: [
            { price: 58, validity: "28 days", data: "3GB", calls: "No", sms: "No", type: "data", benefits: ["3GB total data", "28 days validity", "Data only pack", "4G speed"] },
            { price: 118, validity: "28 days", data: "12GB", calls: "No", sms: "No", type: "data", benefits: ["12GB total data", "28 days validity", "Data only pack", "High speed 4G"] },
            { price: 181, validity: "30 days", data: "25GB", calls: "No", sms: "No", type: "data", popular: true, benefits: ["25GB total data", "30 days validity", "Data only pack", "4G speed"] }
        ],
        unlimited: [
            { price: 699, validity: "84 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "Vi Movies & TV"] },
            { price: 1699, validity: "365 days", data: "24GB", calls: "Unlimited", sms: "3600", type: "prepaid", highlight: "Annual Plan", benefits: ["24GB total data", "Unlimited voice calls", "3600 SMS", "365 days validity", "Vi Movies & TV"] }
        ],
        talktime: [
            { price: 10, validity: "N/A", data: "No", calls: "₹7.50", sms: "No", type: "talktime", benefits: ["₹7.50 talktime", "Instant recharge", "No validity extension"] },
            { price: 20, validity: "N/A", data: "No", calls: "₹15.00", sms: "No", type: "talktime", benefits: ["₹15.00 talktime", "Instant recharge", "No validity extension"] },
            { price: 50, validity: "28 days", data: "No", calls: "₹38.84", sms: "No", type: "talktime", benefits: ["₹38.84 talktime", "28 days validity", "Emergency recharge"] }
        ]
    },
    bsnl: {
        popular: [
            { price: 149, validity: "28 days", data: "1GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Best Value", benefits: ["1GB data per day", "Unlimited voice calls", "100 SMS per day", "BSNL Tunes", "Government network"] },
            { price: 199, validity: "28 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", popular: true, benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "BSNL Tunes", "Reliable network"] },
            { price: 299, validity: "28 days", data: "2GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["2GB data per day", "Unlimited voice calls", "100 SMS per day", "BSNL Tunes", "Wide coverage"] },
            { price: 499, validity: "84 days", data: "1.5GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", highlight: "Long Validity", benefits: ["1.5GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "Government network"] }
        ],
        data: [
            { price: 47, validity: "28 days", data: "2GB", calls: "No", sms: "No", type: "data", benefits: ["2GB total data", "28 days validity", "Data only pack", "3G/4G speed"] },
            { price: 97, validity: "28 days", data: "10GB", calls: "No", sms: "No", type: "data", benefits: ["10GB total data", "28 days validity", "Data only pack", "4G speed"] },
            { price: 147, validity: "30 days", data: "20GB", calls: "No", sms: "No", type: "data", popular: true, benefits: ["20GB total data", "30 days validity", "Data only pack", "4G speed"] }
        ],
        unlimited: [
            { price: 597, validity: "84 days", data: "1GB/day", calls: "Unlimited", sms: "100/day", type: "prepaid", benefits: ["1GB data per day", "Unlimited voice calls", "100 SMS per day", "84 days validity", "BSNL Tunes"] },
            { price: 1499, validity: "365 days", data: "24GB", calls: "Unlimited", sms: "3600", type: "prepaid", highlight: "Annual Plan", benefits: ["24GB total data", "Unlimited voice calls", "3600 SMS", "365 days validity", "Government network"] }
        ],
        talktime: [
            { price: 10, validity: "N/A", data: "No", calls: "₹8.11", sms: "No", type: "talktime", benefits: ["₹8.11 talktime", "Instant recharge", "No validity extension"] },
            { price: 20, validity: "N/A", data: "No", calls: "₹16.22", sms: "No", type: "talktime", benefits: ["₹16.22 talktime", "Instant recharge", "No validity extension"] },
            { price: 50, validity: "28 days", data: "No", calls: "₹42.37", sms: "No", type: "talktime", benefits: ["₹42.37 talktime", "28 days validity", "Emergency recharge"] }
        ]
    }
};

let currentOperator = 'airtel';
let currentCategory = 'popular';

function renderPlans() {
    const container = document.getElementById('plansContainer');
    const plans = plansData[currentOperator][currentCategory];
    
    container.innerHTML = plans.map(plan => `
        <div class="plan-card ${plan.popular ? 'popular' : ''}">
            <div class="plan-type">${plan.type}</div>
            ${plan.highlight ? `<div class="plan-highlight">${plan.highlight}</div>` : ''}
            <div class="plan-price">₹${plan.price}</div>
            <div class="plan-validity">${plan.validity}</div>
            <ul class="plan-benefits">
                ${plan.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <button class="plan-btn" onclick="selectPlan(${plan.price}, '${currentOperator}')">
                Recharge Now
            </button>
        </div>
    `).join('');
}

function selectPlan(amount, operator) {
    localStorage.setItem('selectedPlan', JSON.stringify({ amount, operator }));
    window.location.href = 'recharge.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderPlans();
    
    // Operator selection
    document.querySelectorAll('.operator-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.operator-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentOperator = this.dataset.operator;
            renderPlans();
        });
    });
    
    // Category selection
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderPlans();
        });
    });
});