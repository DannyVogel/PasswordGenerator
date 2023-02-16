const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function renderPasswords() {
    document.getElementById("password1").textContent = generatePassword()
    document.getElementById("password2").textContent = generatePassword()
}

function generatePassword() {
    let password = ""
    let passwordLengthChoice = document.getElementById("passwordLength").value
    for (let i = 0; i < passwordLengthChoice; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    
    return password
}

function toggleDark() {
    document.getElementById("container").classList.toggle("light")
}

function updateLength() {
    let passwordLengthChoice = document.getElementById("passwordLength").value
    document.getElementById("passwordLengthLabel").textContent = "Password length: " + passwordLengthChoice + " characters"
}