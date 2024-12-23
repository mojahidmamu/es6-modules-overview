// console.log('object with storage');
// localStorage.setItem('price', 500);
const addToLocalStorage = ( ) => {
   const idField = document.getElementById('user-id');
   id = idField.value;
   const valueField = document.getElementById('user-value');
   value = valueField.value;

  //  
  if(id && value){
    localStorage.setItem(id, value);
  }
  idField.value = '';
  valueField.value = '';
}
