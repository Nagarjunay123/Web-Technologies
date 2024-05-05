let form=document.querySelector("form")
let eye=document.getElementById("eye")
eye.addEventListener("click",() =>{
    let pass=document.getElementById("Password")
    if(pass.type=="password"){
        pass.type="text"
    }
    else{
        pass.type="password"
    }
})
form.addEventListener("submit",(e) => {

    e.preventDefault()
    let name=document.getElementById("name").value
    let mobile=document.getElementById("phone").value
    let password=document.getElementById("Password").value
    let cpassword=document.getElementById("CPassword").value
    if(name=="" || mobile=="" || password=="" || cpassword==""){
        alert("Please enter Details")
    }
    if(name.length<3 || name.length>10) {
        alert("Please enter minimum 3 characters and maximum 10 characters")
    }
    else if(mobile.length!=10){
        alert("please enter 10 digit mobile number")
    }
    else if(isNaN(mobile)){
        alert("please enter a valid mobile number")
    }
    else if(password!=cpassword){
        alert("Password miss match")

    }

    console.log(name, mobile, password, cpassword)
    console.log(typeof mobile)
});

