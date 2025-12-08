// Global variables
let selectedAmount = 0;
let selectedPaymentMethod = '';

// Form validation and submission
document.getElementById('rechargeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobile = document.getElementById('mobile').value;
    const operator = document.getElementById('operator').value;
    const amount = document.getElementById('amount').value;
    
    // Validation
    if (!validateMobile(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    
    if (!operator) {
        alert('Please select an operator');
        return;
    }
    
    if (!amount || amount < 10) {
        alert('Please enter a valid amount (minimum ₹10)');
        return;
    }
    
    selectedAmount = parseFloat(amount);
    showPaymentModal();
});

// Mobile number validation
function validateMobile(mobile) {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
}

// Plan selection
function selectPlan(amount) {
    document.getElementById('amount').value = amount;
    
    // Remove previous selection
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    event.target.closest('.plan-card').classList.add('selected');
}

// Show payment modal
function showPaymentModal() {
    const modal = document.getElementById('paymentModal');
    const promoCode = document.getElementById('promo').value;
    
    // Calculate discount
    let discount = 0;
    if (promoCode) {
        discount = calculateDiscount(promoCode, selectedAmount);
    }
    
    // Update payment summary
    document.getElementById('summaryAmount').textContent = `₹${selectedAmount}`;
    document.getElementById('summaryDiscount').textContent = `₹${discount}`;
    document.getElementById('summaryTotal').textContent = `₹${selectedAmount - discount}`;
    
    modal.style.display = 'block';
}

// Calculate discount based on promo code
function calculateDiscount(promoCode, amount) {
    const promoCodes = {
        'FIRST20': amount * 0.2,
        'WEEKEND50': Math.min(50, amount * 0.1),
        'MONTHLY15': amount * 0.15
    };
    
    return promoCodes[promoCode.toUpperCase()] || 0;
}

// Payment method selection
function selectPayment(method) {
    selectedPaymentMethod = method;
    
    // Remove previous selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.closest('.payment-option').classList.add('selected');
}

// Process payment with API
async function processPayment() {
    if (!selectedPaymentMethod) {
        alert('Please select a payment method');
        return;
    }
    
    const mobile = document.getElementById('mobile').value;
    const operator = document.getElementById('operator').value;
    const amount = selectedAmount;
    const promoCode = document.getElementById('promo').value;
    
    // Prepare API data
    const rechargeData = {
        mobile_number: mobile,
        operator: operator,
        amount: amount,
        promo_code: promoCode,
        payment_method: selectedPaymentMethod
    };
    
    // Show loading
    document.querySelector('.pay-btn').textContent = 'Processing...';
    
    // Make API call
    const result = await makeAPICall(API_CONFIG.ENDPOINTS.RECHARGE, rechargeData);
    
    if (result.success) {
        alert(`Recharge Successful!\n\nMobile: ${mobile}\nOperator: ${operator}\nAmount: ₹${amount}\nTransaction ID: ${result.transaction_id || 'TXN' + Date.now()}`);
    } else {
        alert(`Recharge Failed: ${result.error || 'Please try again'}`);
    }
    
    // Reset UI
    document.querySelector('.pay-btn').textContent = 'Pay Now';
    closeModal();
    document.getElementById('rechargeForm').reset();
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
}

// Close modal
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
    selectedPaymentMethod = '';
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
}

// Modal close events
document.querySelector('.close').addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Auto-format mobile number input
document.getElementById('mobile').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});

// Apply promo code
function applyPromo() {
    const promoCode = document.getElementById('promo').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (!promoCode) {
        alert('Please enter a promo code');
        return;
    }
    
    if (!amount) {
        alert('Please enter recharge amount first');
        return;
    }
    
    const discount = calculateDiscount(promoCode, amount);
    if (discount > 0) {
        alert(`Promo code applied! You saved ₹${discount}`);
    } else {
        alert('Invalid promo code');
    }
}

// Select recent number
function selectRecent(number) {
    document.getElementById('mobile').value = number;
    document.getElementById('mobile').dispatchEvent(new Event('blur'));
}

// Auto-detect operator
document.getElementById('mobile').addEventListener('blur', function(e) {
    const mobile = e.target.value;
    if (mobile.length === 10) {
        const operatorSelect = document.getElementById('operator');
        
        if (mobile.startsWith('99') || mobile.startsWith('98') || mobile.startsWith('97') || mobile.startsWith('96') || mobile.startsWith('95') || mobile.startsWith('94') || mobile.startsWith('93') || mobile.startsWith('92') || mobile.startsWith('91') || mobile.startsWith('90')) {
            operatorSelect.value = 'airtel';
        } else if (mobile.startsWith('89') || mobile.startsWith('88') || mobile.startsWith('87') || mobile.startsWith('86')) {
            operatorSelect.value = 'jio';
        } else if (mobile.startsWith('85') || mobile.startsWith('84') || mobile.startsWith('83') || mobile.startsWith('82')) {
            operatorSelect.value = 'vi';
        } else if (mobile.startsWith('81') || mobile.startsWith('80') || mobile.startsWith('79') || mobile.startsWith('78')) {
            operatorSelect.value = 'bsnl';
        }
    }
});