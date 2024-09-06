const name = document.querySelector('.username-js');
const session = document.querySelector('.session-js');
const studentType = document.querySelector('.student-type-js').innerHTML;
const fee = document.querySelector('.fee-js');
const level = document.querySelector('.level-js');
const RegNum = document.querySelector('.number-js').innerHTML;

function studentDetails(){
    const studentInfo = []
    studentInfo.push(
        {
            name: name.value,
            session: session.value,
            type: studentType,
            fee: fee.value,
            level: level.value,
            regnumber: RegNum
        }
    )
    return studentInfo;
}
document.querySelector('.invoice-btn').addEventListener('click', () => {
    const data = studentDetails();
    console.log(data)
    localStorage.setItem('student', JSON.stringify(data));
})