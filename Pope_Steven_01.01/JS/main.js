// create some variables for grabbing data we need
const addItems = document.querySelector('.addItems');
const itemsList = document.querySelector(".groceries");
const items = JSON.parse(localStorage.getItem('items')) || [];

//console.log(addItmes);
//display list items
getList = (groceries = [], myList) => {
    myList.innerHTML = groceries.map((food, i) => {
        return `
        <li>
        <label for="item${i}">${food.gName}</label>
        <label>${food.gPrice}</label>
        <button type="submit" onclick="deleteItem(this)">Delete</button>
        </li> 
        `;
    }).join('');
};
getList(items, itemsList);
console.log(getList);

deleteItem = (items, i) =>{
    console.log("clicked");
    delete items[i];
}


//function to add items
addItem = (e) => {
    console.log(e);
    e.preventDefault();
    const gName = (document.querySelector('[name=item]')).value;
    const gPrice = (document.querySelector('[name=price]')).value;
    const item = {
        gName,
        gPrice
    };
    //validate fields 
    if (gName == "" || gPrice == "") {
        new Noty({
            layout: 'topLeft',
            theme: 'mint',
            type: 'warning',
            text: 'All fields must be completed.'
        }).show();

        return false;
    }
    if (isNaN(gPrice)) {
        //add another noty notification here
        new Noty({
            layout: 'topLeft',
            theme: 'mint',
            type: 'warning',
            text: 'Price field must be a number.'
        }).show();
        return false;
    } else {
        items.push(item);
        getList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        e.target.reset();
        new Noty({
            layout: 'topLeft',
            theme: 'mint',
            type: 'success',
            text: 'Successfully added item to list.'
        }).show();

    }
};

addItems.addEventListener('submit', addItem);