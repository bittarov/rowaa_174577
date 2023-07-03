let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'M10',
        image: 'm10.jpg',
        price: 56000
    },
    {
        id: 2,
        name: 'I12',
        image: 'i12.jpg',
        price: 45000
    },
    {
        id: 3,
        name: 'AKG',
        image: 'akg.jpg',
        price: 10000
    },
    {
        id: 4,
        name: 'EarPhone',
        image: 'earphone.jpg',
        price: 7500
    },
    {
        id: 5,
        name: 'SamaraCharger',
        image: 'samaracharger.jpg',
        price: 12000
    },
    {
        id: 6,
        name: 'NokiaCharger',
        image: 'nokiacharger.jpg',
        price: 8000
    },
    {
        id: 7,
        name: 'NokiaCharger',
        image: 'nokiacharger2.jpg',
        price: 8000
    },
    {
        id: 8,
        name: 'SamsungCharger',
        image: 'samsungcharger.jpg',
        price: 8000
    },
    {
        id: 9,
        name: 'AuxCable',
        image: 'AuxCable.jpg',
        price: 8000
    },
    {
        id: 10,
        name: 'AuxCBlutooth',
        image: 'AuxBluetooth.jpg',
        price: 15000
    },
    {
        id: 11,
        name: 'MaxMateCable',
        image: 'cablemax.jpg',
        price: 9000
    },
    {
        id: 12,
        name: 'RealmeCable',
        image: 'relmecable.jpg',
        price: 8000
    },
    {
        id: 13,
        name: 'PowerPank',
        image: 'PowerPank.jpg',
        price: 65000
    },
    {
        id: 14,
        name: 'LaptopBattery',
        image: 'LAPTOPBATTERRY.jpg',
        price: 100000
    },
    {
        id: 15,
        name: 'SamsungBatteryt',
        image: 'battery.jpg',
        price: 22000
    },
    {
        id: 16,
        name: 'FlashMemory',
        image: 'flashmemory.jpg',
        price: 30000
    },
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}