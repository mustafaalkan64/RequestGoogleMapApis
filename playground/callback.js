var getUser = (id, callback) => {

    var user = {
        id: id,
        name: 'Mustafa'
    };

    setTimeout(() => {
        callback(user);
    },
    2000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});