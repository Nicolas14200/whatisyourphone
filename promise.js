const ok = false;

const p = new Promise ((resolve, reject) =>{
                                            if (ok == true){
                                                resolve("ok = true");}
                                            reject ("rejeter");
                                            });
console.log(p);



p.then(()=>{
    console.log("1er then")})

 .catch((e)=>{
    console.log("ERREUR ====>",e)})
 .finally(()=>console.log("ceci s'affiche quoiqu'il arrive !!!"));

 const length = 10;
 const truc = Array(length) 
 console.log("ici",truc);

/////////////////////////////////////////////////////////////////////////////////////////////
function iamAPromise(isError) {
    return new Promise(function(resolve, reject) {
        if(isError) {
            return reject('i reject');
        }
        return resolve('it works');
    })
}

iamAPromise(true)
    .then(function (response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
