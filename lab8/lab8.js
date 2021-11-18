window.onload = function () {
    let maindiv= document.getElementById("employee");
    const button=document.getElementById("button");

    button.onclick = function displayEmployees() {

        const input =document.getElementById("input");
        if (input.value<=0){
            alert(new Error("please put posetive number"));
          }
           else {

        const rxIsObservable = rxjs.from(fetch(`https://randomuser.me/api/?results=${input.value}`)
            .then(resolve => resolve.json()));
       

        rxIsObservable.subscribe(post => {


            for (let i = 0; i < post.results.length; i++) {

                let fullName = document.createElement("div");
                maindiv.appendChild(fullName);
                let firstName = post.results[i].name.first;
                let lastName = post.results[i].name.last;
                fullName.innerHTML =  firstName + " " + lastName;
                let coltwo = document.createElement("div");
                 maindiv.appendChild(coltwo);
                let header = document.createElement("p");
                header.innerText = "Location";
                   header.style.color="blue";
                header.style.fontWeight = "bold"
                header.style.marginLeft="60%";
                header.style.marginTop="-5%";
                coltwo.appendChild(header);

                let location = document.createElement("p");
                location.innerHTML = post.results[i].location.street.number + " " + post.results[i].location.street.name;
                coltwo.appendChild(location);
                location.style.marginLeft="60%";

                let locatState = document.createElement("p");
                let address = post.results[i].location.city + " " + post.results[i].location.state + " " +
                    post.results[i].location.country + " " + post.results[i].location.postcode;
                   locatState.innerHTML = address;
                   locatState.style.marginLeft="60%";
                coltwo.appendChild(locatState);

            }
        })
    }
}
}

