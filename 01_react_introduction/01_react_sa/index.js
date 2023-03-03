let firstName = document.querySelector("#first-name")
let lastName = document.querySelector("#last-name")
let email = document.querySelector("#email")
let html = document.querySelector("#html")
let java = document.querySelector("#java")
let javascript = document.querySelector("#javascript")

function validateForm(){
if(firstName.value !== '' && lastName.value !== '' && email.value !== '') {
    if($(javascript).is(":checked") === true || $(html).is(":checked") === true || $(java).is(":checked") === true) {
        alert('제출 완료!')
    } else {
        event.preventDefault();
        alert('Favorite을 체크해주세요')
        
    }
}
}
//event.preventDefault(); 문제
/**
 * 조건문의 문제?
 * 제이쿼리 이해도 문제?
 */