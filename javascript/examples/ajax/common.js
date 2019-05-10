function sendServerRequest(success, failure) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/todos");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            success(this.responseText);
        } else {
            failure();
        }
    };
}