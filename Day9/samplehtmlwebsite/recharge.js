let selectedAmount = 0;
let selectedPaymentMethod = '';
let appliedDiscount = 0;

// Promo codes
const promoCodes = {
    'FIRST20': { discount: 0.2, minAmount: 100, description: '20% off on first recharge' },
    'SAVE50': { discount: 50, minAmount: 500, description: 'Flat ₹50 off on ₹500+' },
    'WELCOME10': { discount: 0.1, minAmount: 200, description: '10% off for new users' }
};

document.addEventListener('DOMContentLoaded', function() {
    // Load selected plan if coming from plans page
    const selectedPlan = localStorage.getItem('selectedPlan');
    if (selectedPlan) {
        const plan = JSON.parse(selectedPlan);
        document.getElementById('amount').value = plan.amount;
        document.getElementById('operator').value = plan.operator;
        localStorage.removeItem('selectedPlan');
    }

    // Form submission
    document.getElementById('rechargeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const mobile = document.getElementById('mobile').value;
        const operator = document.getElementById('operator').value;
        const amount = document.getElementById('amount').value;
        
        if (!validateForm(mobile, operator, amount)) {
            return;
        }
        
        selectedAmount = parseFloat(amount);
        showPaymentModal(mobile, operator, amount);
    });

    // Quick amount selection
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.dataset.amount;
            document.getElementById('amount').value = amount;
            
            // Update active state
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile number input formatting
    document.getElementById('mobile').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
        
        // Auto-detect operator
        if (value.length === 10) {
            detectOperator(value);
        }
    });

    // Payment method selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedPaymentMethod = this.dataset.method;
        });
    });
});

function validateForm(mobile, operator, amount) {
    if (!mobile || mobile.length !== 10) {
        showMessage('Please enter a valid 10-digit mobile number', 'error');
        return false;
    }
    
    if (!operator) {
        showMessage('Please select an operator', 'error');
        return false;
    }
    
    if (!amount || amount < 10) {
        showMessage('Please enter a valid amount (minimum ₹10)', 'error');
        return false;
    }
    
    return true;
}

function detectOperator(mobile) {
    const operatorSelect = document.getElementById('operator');
    const detectedDiv = document.getElementById('operatorDetected');
    
    // Basic operator detection logic
    const firstThree = mobile.substring(0, 3);
    let operator = '';
    
    if (['701', '702', '703', '704', '705', '706', '707', '708', '709', '963', '964', '965', '966', '967', '968', '969', '970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '990', '991', '992', '993', '994', '995', '996', '997', '998', '999'].includes(firstThree)) {
        operator = 'airtel';
    } else if (['630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709', '880', '881', '882', '883', '884', '885', '886', '887', '888', '889', '890', '891', '892', '893', '894', '895', '896', '897', '898', '899'].includes(firstThree)) {
        operator = 'jio';
    } else if (['600', '601', '602', '603', '604', '605', '606', '607', '608', '609', '650', '651', '652', '653', '654', '655', '656', '657', '658', '659', '800', '801', '802', '803', '804', '805', '806', '807', '808', '809', '850', '851', '852', '853', '854', '855', '856', '857', '858', '859'].includes(firstThree)) {
        operator = 'vi';
    } else if (['940', '941', '942', '943', '944', '945', '946', '947', '948', '949', '620', '621', '622', '623', '624', '625', '626', '627', '628', '629'].includes(firstThree)) {
        operator = 'bsnl';
    }
    
    if (operator) {
        operatorSelect.value = operator;
        detectedDiv.textContent = `✓ ${operator.toUpperCase()} detected`;
        detectedDiv.style.display = 'block';
    } else {
        detectedDiv.style.display = 'none';
    }
}

function applyPromo() {
    const promoCode = document.getElementById('promo').value.toUpperCase();
    const amount = parseFloat(document.getElementById('amount').value);
    const messageDiv = document.getElementById('promoMessage');
    
    if (!promoCode) {
        showPromoMessage('Please enter a promo code', 'error');
        return;
    }
    
    if (!amount) {
        showPromoMessage('Please enter recharge amount first', 'error');
        return;
    }
    
    const promo = promoCodes[promoCode];
    if (!promo) {
        showPromoMessage('Invalid promo code', 'error');
        return;
    }
    
    if (amount < promo.minAmount) {
        showPromoMessage(`Minimum amount ₹${promo.minAmount} required`, 'error');
        return;
    }
    
    appliedDiscount = promo.discount < 1 ? amount * promo.discount : promo.discount;
    showPromoMessage(`✓ ${promo.description} - You saved ₹${appliedDiscount}!`, 'success');
}

function showPromoMessage(message, type) {
    const messageDiv = document.getElementById('promoMessage');
    messageDiv.textContent = message;
    messageDiv.className = `promo-message ${type}`;
}

function selectRecent(mobile, operator) {
    document.getElementById('mobile').value = mobile;
    document.getElementById('operator').value = operator;
    detectOperator(mobile);
}

function showPaymentModal(mobile, operator, amount) {
    document.getElementById('summaryMobile').textContent = mobile;
    document.getElementById('summaryOperator').textContent = operator.toUpperCase();
    document.getElementById('summaryAmount').textContent = `₹${amount}`;
    
    if (appliedDiscount > 0) {
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('summaryDiscount').textContent = `₹${appliedDiscount}`;
        document.getElementById('summaryTotal').textContent = `₹${amount - appliedDiscount}`;
    } else {
        document.getElementById('discountRow').style.display = 'none';
        document.getElementById('summaryTotal').textContent = `₹${amount}`;
    }
    
    document.getElementById('paymentModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
    selectedPaymentMethod = '';
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
}

function processPayment() {
    if (!selectedPaymentMethod) {
        showMessage('Please select a payment method', 'error');
        return;
    }
    
    const mobile = document.getElementById('summaryMobile').textContent;
    const operator = document.getElementById('summaryOperator').textContent;
    const totalAmount = document.getElementById('summaryTotal').textContent;
    
    // Simulate payment processing
    document.querySelector('.pay-now-btn').textContent = 'Processing...';
    document.querySelector('.pay-now-btn').disabled = true;
    
    setTimeout(() => {
        alert(`🎉 Payment Successful!\n\nMobile: ${mobile}\nOperator: ${operator}\nAmount: ${totalAmount}\nPayment Method: ${selectedPaymentMethod.toUpperCase()}\nTransaction ID: TXN${Date.now()}\n\nYour recharge will be processed within 2 minutes.`);
        
        // Reset form
        document.getElementById('rechargeForm').reset();
        appliedDiscount = 0;
        document.getElementById('promoMessage').textContent = '';
        document.querySelector('.pay-now-btn').textContent = 'Pay Now';
        document.querySelector('.pay-now-btn').disabled = false;
        closeModal();
    }, 2000);
}

function showMessage(message, type) {
    // Create a temporary message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        document.body.removeChild(messageEl);
    }, 3000);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        closeModal();
    }
});