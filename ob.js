var obfuscatedEmail = ['k','r','i','s','t','o','r','o','s','e','t','e','@','g','m','a','i','l','.','c','o','m'];
var email = obfuscatedEmail.join('');

var obfuscatedGithub = ['h','t','t','p','s',':','/','/','g','i','t','h','u','b','.','c','o','m','/','Q','u','a','t','t','r','u','s'];
var github = obfuscatedGithub.join('');

var obfuscatedNumber = ['+','6','3','9','2','7','7','6','7','1','4','3','9'];
var number = obfuscatedNumber.join('');

var emailLink = document.getElementById('email-link');
emailLink.innerHTML = '<a href="mailto:' + email + '"><i class="fas fa-at"></i> Send a mail</a>';

var githubLink = document.getElementById("github-link");
githubLink.innerHTML = '<a href="' + github + '"><i class="fab fa-github"></i> Github</a>';

var numberLink = document.getElementById('number-link');
numberLink.innerHTML = '<a href="tel:' + number + '"><i class="fas fa-mobile-alt"></i> Call me</a>';