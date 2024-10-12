document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
});
