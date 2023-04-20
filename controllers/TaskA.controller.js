

async function getData (user_id,token1) {
   // user_id = 432;
    const response1 = await fetch(`https://gorest.co.in/public/v2/users/${user_id}/posts`,{

    method: 'GET',
    headers:{
        'Authorization':`Bearer ${token1}`
    }
    });
    const data = await response1.json();
   // console.log(data);
    return data;
    }

async function putData (user_id,token1,DATa){

    const request = await fetch(`https://gorest.co.in/public/v2/users/${user_id}/posts?title=${DATa.title}&body=${DATa.body}`,{

    method: 'POST',
    headers:{
        'Authorization':`Bearer ${token1}`

    }
   
    });
    
    return "success";
}
   
 

module.exports = {
    getData,
    putData
 };
