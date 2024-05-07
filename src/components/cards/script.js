
document.querySelectorAll('[data-target]').forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        document.querySelectorAll('.info-container').forEach(info => {
            info.style.display = 'none';
        });
        
        document.getElementById(target).style.display = 'block';
    });
});