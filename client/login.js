var loginForm = document.getElementById('loginForm')
const API_URL='http://localhost:5001/auth/login';
loginForm.addEventListener('submit',async(event)=>{
    event.preventDefault()
    var email=document.getElementById('exampleInputEmail1').value;
    var pass=document.getElementById('exampleInputPassword1').value;
    const user={email,pass};
    login(user);
})
async function login(user) {
    try {
        const response =await fetch(API_URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
