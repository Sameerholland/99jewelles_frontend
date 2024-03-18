export async function CreateAccount(userdata) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/Auth/createuser", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "content-type": "application/json" },
    });
    const data = response.json();
    resolve({ data });
  });
}

export async function Loginuser(userdata) {
  return new Promise(async (resolve,reject) => {
    try{
    const response = await fetch("http://localhost:8080/Auth/login", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "content-type": "application/json" },
    });
    const data = response.json();
    resolve({ data });
  }
  catch(err){
    reject(err)
  }
  });

}



export async function Checkuser(userdata) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/Auth/check", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "content-type": "application/json" },
    });
    const data = response.data();
    resolve({ data });
  });
}



export async function UpdatePassword(userdata) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/Auth/updatepaaword", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "content-type": "application/json" },
    });
    const data = response.data();
    resolve({ data });
  });
}






