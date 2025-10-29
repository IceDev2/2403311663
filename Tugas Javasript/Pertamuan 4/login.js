const token = ~~[Math.random()*1e8].toString();
const tabungan = [1000000,2000000,3000000];

function login(user, callback) {
    console.log("login berhasil");
    setTimeout(() => {
        callback({token, user});
    },2000);
}

function getUser(token) {
    if(token) {
        return {key: "C3541"};
    }
}

function getTabungan(user, callback) {
    if(user) {
        setTimeout(() => {
            callback(tabungan);
        }, 2000);
    }
}

function getSaldo(tabungan, callback) {
    if(tabungan) {
        setTimeout(() => {
            let total = 0;
            tabungan.forEach((item) => {
                total += item;
            });
        }, 2000);
    }else {
        callback(0);
    }
}

constuser = login("Alvin", function(response) {
    const key = getUser(response.token);
    console.log(key);
    getTabungan(response.user, function(saldo) {
        console.log(tabungan);
        getSaldo(tabungan, function(saldo) {
            console.log(saldo);
        })
    })
})