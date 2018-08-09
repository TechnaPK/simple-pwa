fetchButton.onclick = function() {

    var username = usernameField.value.trim()

    if( username === "" ){
        alert( "Enter user name first" )
        return
    }

    fetch('https://api.github.com/users/'+ username +'/followers')
    .then(function(response){
        return response.json();
    }).then(function(users){
        var output = "";

        output += `<h3>${users.length} users are following: ${username}<h3>`;

        if( users.length ){
            output += `<ul>`;
            for( var i = 0; i < users.length; i++ ){
                output += `<li> 
                            <img src="${users[i].avatar_url}" /> 
                            username:${users[i].login} <br>
                            profile:${users[i].url} 
                            </li>`;
            }
            output += `</ul>`;
        }

        result.innerHTML = output

    }).catch(function(err){
        console.log(err);
    })

}