window.onload = function(){
    window.print();
}

//This line of code gets the users details from the form from the previous page
const oldData = JSON.parse(localStorage.getItem('student'));
const oldStudentData = oldData[0]

//This line of code is what is displayed in the qr code
const html = `
    This invoice belongs to ${oldStudentData.name}

    Ref No: ${loop('8a9428d919844bac8dc881c36b73c844')}

    Invoice #: FUNAI/2/SCHF${loop('10000310097')}

    Remitta RRR #: ${loop('331010575874')}

`
//This line of code renders whatever details that was inputed in the previous page to its appropriate section
let studentHTML = `
    <p class="user-name-js">${oldStudentData.name}</p>
    <p>${oldStudentData.regnumber}</p>
    <p>${oldStudentData.level}</p>
    <p>
    MATHEMATICS/COMPUTER SCIENCE/STATISTICS/INFORMATICS
    </p>
    <p>${oldStudentData.type}</p`

const qr = new QRCode(document.querySelector('.qr-img-js'),{
text: html,
width: 150,
height: 150,
correctLevel: QRCode.CorrectLevel.H
})


document.querySelector('.user-js').innerHTML = studentHTML;

function loop(value){
    let count = 0;
    let invoice = ''
    for(let i = 0; i < value.length; i++){
        let spot = value[i]
        if(count < 5){
            invoice += spot
            count++
        }else{
            spot = '*'
            invoice += spot
        }
    }
    return invoice
}

//This lines of code is triggered when the qr code is clicked, it displays the remita and invoice details in real time.
document.querySelector('.qr-img-js').addEventListener('click',() => {
    document.querySelector('.qr-img-js'). innerHTML = '';
    document.querySelector('.qr-veil-js').innerHTML = 
    `
    <p>Remita RRR #: 331010575874</p>
    <p>Transaction Ref #: 8a9428d919844bac8dc881c36b73c844</p>
    <p>Invoice #: FUNAI/2/SCHF10000310097</p>
    <a class= 'qr-unveil' href= "#">Click here to view QR code </a>
    `
    document.querySelector('.qr-unveil').addEventListener('click', () => {
        const qr = new QRCode(document.querySelector('.qr-img-js'),{
            text: html,
            width: 150,
            height: 150,
            correctLevel: QRCode.CorrectLevel.H
         })
         document.querySelector('.qr-veil-js').innerHTML = ''
    })
})
