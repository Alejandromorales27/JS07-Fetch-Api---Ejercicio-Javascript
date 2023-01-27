console.log("JS07 Fetch API");
let datosUsuario;

const traerDatosApi = (page=1) => {
    const url = `https://reqres.in/api/users?delay=3` 
    fetch(url)
        .then( response=> response.json())
        .then( users => {
         localStorage.setItem("users", JSON.stringify(users.data));
         leerDatos()
      
         
       
         
    
     

        })
        
        .catch( error => console.log(error));
}


let baseUsuarios = JSON.parse(localStorage.getItem("users"));

function leerDatos(){
    baseUsuarios = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < baseUsuarios.length; i++) {
        document.getElementById('datos').innerHTML += `<tr>
        <td id="id">${baseUsuarios[i].id}</td>
        <td id=firstname">${baseUsuarios[i].first_name}</td>
        <td id="lastname">${baseUsuarios[i].last_name}</td>
        <td id="email">${baseUsuarios[i].email}</td>
        <td><img style="border-radius: 50px;" id="avatar" src= "${baseUsuarios[i].avatar}"></td>`
        }
    }


    function comprobarDatos(){
        if(baseUsuarios){
            leerDatos();
           

        }
        else 
        traerDatosApi();
        setInterval()
        
     
        

    }

    localStorage.setItem("dataTime", Date.now());
    let datoTiempo;
    let tiempoPasado;

    function checartiempo() {
        datoTiempo = localStorage.getItem("dataTime");
        tiempoPasado = Date.now();
        if(tiempoPasado - datoTiempo >= 20_000) {
            localStorage.clear();
        }
    }
    

    const intervalo = setInterval(() => {
        checartiempo();
      }, 0);
      