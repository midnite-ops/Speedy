const sForm = document.getElementById('form1')

let inputs = document.querySelectorAll('.inp')
let subBtn = document.getElementById('subBtn')

let sFName;
let sFMail;
let sFPass; 

subBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    inputs.forEach(e => {
        if(e.id == 'floatingText'){
            sFName = e.value    
        }
        if(e.id == 'floatingInput'){
            sFMail = e.value
        }
        if(e.id == 'floatingPassword'){
            sFPass = e.value
        }
    })

    if(sFName && sFMail && sFPass){
        let subObj = {
            rName: sFName,
            rEmail: sFMail,
            rPass: sFPass
        }
        console.log(subObj)

        let sendFormData = fetch('http://localhost:3033/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(subObj)
        }).then(resp => resp.json())
          .then(data => console.log(data))

    }
})
