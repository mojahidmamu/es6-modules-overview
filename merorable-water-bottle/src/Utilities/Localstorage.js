const getStoreCard = () => {
   const storeCardString = localStorage.getItem('card');
   if(storeCardString) {
    return JSON.parse(storeCardString)
   }
   return [];
}

const saveCardTols = card => {
  const cardStringfied = JSON.stringify(card);
  localStorage.setItem('card', cardStringfied);
} 

const addTols = id => {
  const card = getStoreCard();
  card.push(id);
  // save to localStorage
  saveCardTols(card);

}

export { addTols, getStoreCard };