async function loginService(username, password){
    let data={
        'username':username,
        'password':password
    }
    let url="http://localhost:3001/auth/v1";
   
    console.log("in loginservice: " + "username is: " + username)
    const response = await fetch(url,{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log("in loginservice: " + "password is: " + password)
    console.log("data token: "+data.token)
    return await response.json();
}

module.exports = loginService;