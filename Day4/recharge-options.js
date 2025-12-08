function selectOption(type) {
    switch(type) {
        case 'mobile':
            window.location.href = 'recharge.html';
            break;
        case 'dth':
            showComingSoon('DTH Recharge');
            break;
        case 'datacard':
            showComingSoon('Data Card Recharge');
            break;
        case 'electricity':
            showComingSoon('Electricity Bill Payment');
            break;
        case 'gas':
            showComingSoon('Gas Bill Payment');
            break;
        case 'water':
            showComingSoon('Water Bill Payment');
            break;
    }
}

function quickAction(action) {
    switch(action) {
        case 'history':
            showComingSoon('Transaction History');
            break;
        case 'offers':
            window.location.href = 'landing.html#offers';
            break;
        case 'support':
            showSupportModal();
            break;
        case 'wallet':
            showComingSoon('Digital Wallet');
            break;
    }
}

function showComingSoon(feature) {
    alert(`${feature} feature is coming soon! Stay tuned for updates.`);
}

function showSupportModal() {
    const supportInfo = `
Customer Support:
📞 Phone: 1800-123-4567
📧 Email: support@rechargenow.com
💬 Live Chat: Available 24/7
🕒 Hours: Monday to Sunday, 24/7

For immediate assistance, please call our helpline.
    `;
    alert(supportInfo);
}

// Add hover effects and animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.option-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});