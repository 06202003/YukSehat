// Show Alert
function showAlert() {
  alert('Nama Akun : admin \nKata Sandi : admin123 \n \nNama Akun : user\nKata Sandi : user123');
}

// verifikasi akun admin

function acc() {
  if ((document.getElementById('userid').value == 'admin' && document.getElementById('pswrd').value == 'admin123') || (document.getElementById('userid').value == 'user' && document.getElementById('pswrd').value == 'user123')) {
    login_form.setAttribute('action', 'index.html');
  } else {
    alert('Error Password or Username');
    document.getElementById('userid').value = '';
    document.getElementById('pswrd').value = '';
    return false;
  }
}
