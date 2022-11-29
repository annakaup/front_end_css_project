document.getElementById('send').addEventListener('click', buttonSend);

let fname = document.getElementById('fname');
let birthday = document.getElementById('birthday');
let cars = document.getElementById('cars');
let ppp = document.getElementById('ppp');
let comment = document.getElementById('comment')
ppp.style.fontWeight = '900';
ppp.style.color = 'red';


function buttonSend() {
    // let fname = document.getElementById('fname').value;
    // alert('Firstname ' + fname.value + 'Birthday ' + birthday.value +'Car' +cars.value);
    ppp.classList.remove('pp');
    if (comment.value.length < 5) {
        alert('error!');
    } else {
        ppp.innerHTML = 'Firstname ' + fname.value + ' Birthday ' + birthday.value + ' Car ' + cars.value;
    }
}

