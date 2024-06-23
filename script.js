function sendMail() {
    let frm = document.getElementById('contact-form')
    let params = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        parent: document.getElementById('parent').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    }

    emailjs.send("service_shwi2bt", "template_sqjehl6", params)
        .then(alert('Email has been sent successfully'))
        .then(frm.reset())
}








// function sendMail() {
//     let frm = document.getElementById('contact-form')
//     let params = {
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//         parent: document.getElementById('parent').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//     }
//
//     emailjs.send("service_shwi2bt", "template_sqjehl6", params).then(
//         (response) => {
//             alert('Email has been sent successfully')
//             console.log('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//             alert('Email has not been sent!')
//             console.log('FAILED...', error);
//         },
//     )
//     frm.reset()
// }