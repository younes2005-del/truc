function permutate(form) {

    var firstlastname = form.firstlastname.value.toLowerCase().trim();
    var namesplit = firstlastname.split(" ");
    var firstname = namesplit[0];
    var lastname = namesplit[1];
    var arr = [];
  
    if (firstname == "malak") {
      document.getElementById("results").innerHTML = "Nti hya l2admin";
      return false;
    }  
    var innertext = document.getElementById("results");
    innertext.innerHTML = arr;
  }
