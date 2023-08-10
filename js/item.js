const database = firebase.firestore();

function createItem(description, unitPrice, qty) {
    database.collection('item').add({
        description: description,
        unitPrice: unitPrice,
        qty: qty
    })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
}
const saveData = () => {
    let descData = document.getElementById('description');
    let priceData = document.getElementById('unitprice');
    let qtyData = document.getElementById('qty');

    let desc = descData.value;
    let price = priceData.value;
    let qty = qtyData.value;
    createItem(desc, price, qty);
}
