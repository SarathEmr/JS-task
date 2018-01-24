var operand1,operand2,result,operator;
function equal()
{
  operand2=Number(c.text.value);
  if(c.text.value=='')
  {
    if(operator=='power')
    {
      result=operand1**2;
      return result;
    }
    else
      alert("There is no values for computation");
  }
  else
  {
    if(operator=='+')
      result=operand1+operand2;
    else if(operator=='-')
      result=operand1-operand2;
    else if(operator=='*')
      result=operand1*operand2;
    else if(operator=='/')
      if(operand2==0)
        return "zero division error"
      else
        result=operand1/operand2;
    else if(operator=='%')
      result=operand1%operand2;
    return result;
  }
}
function plus()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='+';
    c.text.value='';
  }
}
function minus()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='-';
    c.text.value='';
  }
}
function mul()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='*';
    c.text.value='';
  }
}
function div()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='/';
    c.text.value='';
  }
}
function square()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='power';
    c.text.value='';
  }
}
function modulus()
{
  if(c.text.value=='')
    alert("enter a number before operator");
  else
  {
    operand1=Number(c.text.value);
    operator='%';
    c.text.value='';
  }
}
function zero()
{
  if(c.text.value=='')
    return c.text.value+='0';
  else
    return c.text.value+='00';
}
function dot()
{
  if(c.text.value=='')
    return c.text.value+='0.';
  else
    return c.text.value+='.';
}

var todo = document.querySelector( '#todolist' ),
    form = document.querySelector('form'),
    field = document.querySelector( '#newitem' );
if(typeof form !== null){
form.addEventListener( 'submit', function() {
  todo.innerHTML += '<li>' + field.value + '</li>';
  field.value = '';
  storestate();
});
}
todo.addEventListener( 'click', function( ev ) {
  var t = ev.target;
  if ( t.tagName === 'LI' ) {
    if ( t.classList.contains( 'done' ) ) {
      t.parentNode.removeChild( t );
    } else {
      t.classList.add( 'done' );
    }
    storestate();
  };
});

function storestate() {
  localStorage.todolist = todo.innerHTML;
}

function retrievestate() {
  if ( localStorage.todolist ) {
    todo.innerHTML = localStorage.todolist;
  }
}
var table;

function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        table = document.getElementById('table');
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
  table = document.getElementById("table");
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
