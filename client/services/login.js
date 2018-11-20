
$("#loginBtn").click(function(){
	var username = $("#inputUsername").val();
	var password = $("#inputPassword").val();
	var credentials = {"username":"admin","password":"Ngsoft123"};
    $.post("http://localhost:8082/login", credentials ,function(data, status){
        if(data){
          // move to home page 
          console.log(data)
        } else {
        	alert("username or password is incorrect")
        }
    });
});