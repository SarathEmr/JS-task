

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
