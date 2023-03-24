const users = require('./users.json');
console.log("//////////////////////////////////////////////////////////////////////////////////")
// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Introducing

// Don't modify this function. You must use it and work with what this function returns.
function getPhoneNumbers(size) {
    const createPhoneNumber = function() {
        let format = "(xxx) xxx-xxxx";
        const numberToGenerate = [...format].filter((x) => x === "x").length;// ...  ????

        for (var i = 0; i < numberToGenerate; i++) {
            format = format.replace("x", (Math.random() * 10).toFixed(0));
        }
        return format;
    }

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises
    return new Promise((resolve, reject) => {// la fonction getPhoneNumbers return une promise
        try {
            const length = Math.min(10, size);//chagement de Math.min en Math.max
            const phones = Array(length)
                .fill(null)//rempli l'aray phones de null
                .map((x, i) => {
                    return createPhoneNumber();
                });
            return resolve({
                success: {
                    total: length
                },
                contents: {
                    phonenumbers: phones
                }
            });
        } catch (error) {
            return reject(error);
        }
    });
}
console.log("nombre de users :",users.length)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function assignPhoneToUsers() {
    const results =  await getPhoneNumbers(users.length);// atend que la fonction soit executer
    //console.log("ICI =====>",results);                    await n'est utilisable que sur les fonction async
    
    users.map( user => user.phone = results.contents.phonenumbers[0] );
    
    
    
    //for (let i = 0 ; i<users.length ;i++){
        //console.log(users[i]);
        //users[i].phone = results.contents.phonenumbers[i];
    //}
    return users;
    // fill me with the necessary logic to add phone for each users.
}

(async () => {
    await assignPhoneToUsers();// atend que la fonction soit executer 
    console.log(users)                           
    //let new_users = JSON.stringify(users)
    //console.log(new_users);
    //users.writeFile("users.json", new_users) ?????
})();


