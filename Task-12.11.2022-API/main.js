var p = fetch('https://jsonplaceholder.typicode.com/users') // method = GET 
    .then(function (response) { return response.json(); }, function (error) { return console.log(error); })
    .then(function (users) { return renderUsers(users); }, function (error) { return console.log(error); });
function renderUsers(users) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == 'Ervin Howell') {
            console.log(users[i].id + "." + ' ' + users[i].name + "------- " + "Yes");
        }
        else {
            console.log(users[i].id + "." + ' ' + users[i].name + " -------" + "No");
        }
    }
}
