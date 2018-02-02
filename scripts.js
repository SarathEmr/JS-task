var operand1, operand2, result, operator;

function equal() {
  operand2 = Number(c.text.value);
  if (c.text.value == '') {
    if (operator == 'power') {
      result = operand1 ** 2;
      return result;
    } else
      alert("There is no values for computation");
  } else {
    if (operator == '+')
      result = operand1 + operand2;
    else if (operator == '-')
      result = operand1 - operand2;
    else if (operator == '*')
      result = operand1 * operand2;
    else if (operator == '/')
      if (operand2 == 0)
        return "zero division error"
    else
      result = operand1 / operand2;
    else if (operator == '%')
      result = operand1 % operand2;
    return result;
  }
}

function plus() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = '+';
    c.text.value = '';
  }
}

function minus() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = '-';
    c.text.value = '';
  }
}

function mul() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = '*';
    c.text.value = '';
  }
}

function div() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = '/';
    c.text.value = '';
  }
}

function square() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = 'power';
    c.text.value = '';
  }
}

function modulus() {
  if (c.text.value == '')
    alert("enter a number before operator");
  else {
    operand1 = Number(c.text.value);
    operator = '%';
    c.text.value = '';
  }
}

function zero() {
  if (c.text.value == '')
    return c.text.value += '0';
  else
    return c.text.value += '00';
}

function dot() {
  if (c.text.value == '')
    return c.text.value += '0.';
  else
    return c.text.value += '.';
}

var todo = document.querySelector('#todolist'),
  form = document.querySelector('form'),
  field = document.querySelector('#newitem');
if (typeof form !== null) {
  form.addEventListener('submit', function() {
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    storestate();
  });
}
todo.addEventListener('click', function(ev) {
  var t = ev.target;
  if (t.tagName === 'LI') {
    if (t.classList.contains('done')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('done');
    }
    storestate();
  };
});

function storestate() {
  localStorage.todolist = todo.innerHTML;
}

function retrievestate() {
  if (localStorage.todolist) {
    todo.innerHTML = localStorage.todolist;
  }
}

var letters = /^[A-Za-z, ]+$/;

var mailvailid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

var re = /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/;

var namef = 0,
  emailf = 0,
  webf = 0;

function checkName(nm) {
  if ((nm == null) || (!nm.match(letters)) || (nm.length > 25)) {
    document.getElementById("errorname").innerHTML = "invalid name";
  } else {
    namef = 1;
    document.getElementById("errorname").innerHTML = " ";
  }
}

function checkEmail(mail) {
  var atpos = mail.indexOf("@");
  var dotpos = mail.lastIndexOf(".");
  if (atpos == null || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length || dotpos == null || (!mail.match(mailvailid))) {

    document.getElementById("erroremail").innerHTML = "invalid email";
  } else {
    emailf = 1;
    document.getElementById("erroremail").innerHTML = " ";
  }
}

function checkweb(url) {
  if (!url.match(re)) {

    document.getElementById("errorweb").innerHTML = "invalid url";
  } else {

    document.getElementById("errorweb").innerHTML = " ";
  }

}

function checkfield() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("email").value;

  if (name.length == 0) {
    document.getElementById("errorname").innerHTML = "name field is empty";
  } else {

    namef = 2;
    document.getElementById("errorname").innerHTML = " ";
    checkName(name);
  }

  if (mail.length == 0) {
    document.getElementById("erroremail").innerHTML = "email field is empty";
  } else {
    emailf = 2;
    document.getElementById("erroremail").innerHTML = " ";
    checkEmail(mail);
  }

  if (namef == 1) {
    if (emailf == 1) {
      alert("submit successfully");
    } else if (emailf == 2) {

      alert("email incorrect format");
    }
  } else if (namef == 2 && emailf == 2) {
    console.log(emailf);
    alert("name  & email incorrect format");
  } else if (namef == 2) {
    alert("name incorrect format");
  } else if (emailf == 2) {

    alert("email incorrect format");

  }
}

var table;

function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        table = document.getElementById('data_table');
        var row = table.insertRow(-1);
        var cell_id = row.insertCell(0);
        var cell_name = row.insertCell(1);
        var cell_username = row.insertCell(2);
        var cell_email = row.insertCell(3);
        cell_id.innerHTML = user.id;
        cell_name.innerHTML = user.name;
        cell_username.innerHTML = user.username;
        cell_email.innerHTML = user.email;
      });
    })
}

function sortTable() {
  table = document.getElementById("data_table");
  var direction, isSwitching, toSwitch, x, y, count = 0,
    i;
  // Set the sorting direction
  direction = "asc";
  isSwitching = true;
  while (isSwitching) {
    /* isSwitching determines whether any switching is being done.
    Initially assume that no switching has to be done */
    isSwitching = false;
    rows = table.getElementsByTagName("TR");
    // Loop through all row elements and compare successive ones
    for (i = 1; i < (rows.length - 1); i++) {
      /* toSwitch determines whether elements should be switched or not.
      Initially assume that no switching is to be made*/
      toSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check whether to switch rows based on direction
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          toSwitch = true
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          toSwitch = true;
          break;
        }
      }
    }
    // If toSwitch has been set, then swap the rows
    if (toSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
      // count is incremented each time a switch has been made
      count++;
    } else {
      /* If count is 0 and direction is 'asc', run the loop again by
      changing direction to 'desc' */
      if (count == 0 && direction == "asc") {
        direction = "desc";
        isSwitching = true;
      }
    }
  }
}








	function addToLocalStorage(){
		if( typeof(Storage)!= "undefined" ){			// add contents of ul to local storage
			localStorage.setItem("list", document.getElementById("todo_ul").innerHTML );
		}
		else{
			alert("Sorry, local storage is not supported!");
		}
	}

	

	if (performance.navigation.type == 1) {				// if this page is reloaded
    		document.getElementById("todo_ul").innerHTML= localStorage.getItem("list");  
  	}



				// add 'close' to the li elements
/*
	var listItems= document.getElementsByTagName("li");
	for( var i=0; i< listItems.length; i++ ){
		var span= document.createElement("span");
		var text= document.createTextNode( "\u00D7" );
		span.className= "close";
		span.appendChild(text);
		listItems[i].appendChild( span );

		listItems[i].onclick=function(){
			this.classList.toggle("checked");
		}	
	}
*/



	var listItems= document.querySelectorAll("#todo_ul li");
	for( var i=0; i< listItems.length; i++ ){
		listItems[i].onclick=function(){		// when a li is clicked, toggle class="checked"
			this.classList.toggle("checked");
			addToLocalStorage();	
		}	
	}


	


	var closeElements= document.getElementsByClassName("close");	// when 'close' is clicked, hide the corresponding li
	for( var i=0; i< closeElements.length; i++ ){
		closeElements[i].onclick= function(){
			this.parentElement.style.display= "none";
			//$(this).parent().hide(1000);
			addToLocalStorage();	
		}
	}

/*
	var checked= document.getElementsByClassName("checked");
	for(var i=0; i< checked.length; i++){
		var span= document.createElement("span");
		var text= document.createTextNode( "\u2714" );
		checked[i].appendChild(span);
	}
*/


	function addLI(){
		var td_input= document.getElementById("todo_text");
		var input= td_input.value;
		td_input.value="";
		//alert(input);
		if( input=="" ){
			alert("Please enter something!");
		}
		else{
			var newli= document.createElement("li");
			var text= document.createTextNode( input );
			newli.appendChild(text);

					// add 'close'
			var span= document.createElement("span");
			var textx= document.createTextNode( "\u00D7" );
			span.className= "close";
			span.appendChild(textx);
			newli.appendChild( span );

			newli.onclick=function(){
				this.classList.toggle("checked");
				addToLocalStorage();
			}

			span.onclick= function(){
				this.parentElement.style.display= "none";

				addToLocalStorage();	
			}

			document.getElementById("todo_ul").appendChild( newli );	// add new li to the ul element

			

			addToLocalStorage();
		}

		
	}








