let items = ["backpack", "soccer ball", "oven mitt", "sandwich"];
let list = document.getElementById("list");

function paintItems() {
    let listItemsHTML = "";
    items.forEach(function(item, index) {
        listItemsHTML = listItemsHTML + `<li>${item}</li>`;
    });
    list.innerHTML = listItemsHTML;
}

paintItems();
window.handleButtonClick = function() {
    let newItem = document.getElementById("newItem");
    items.push(newItem.value);
    paintItems();
    newItem.value = "";
}

// list.innerHTML = "<li>first item</li><li>second item</li>"
// function logTheItem(item, index) {
//     console.log(index);
//     console.log(item);
// }

// items.forEach(logTheItem);

// let n = 0;
// let x = 32;
// let y = 19;
// while(n < 4) {
//     console.log(items[n]);
//     n = n + 1;
//     x = x - 1;
//     y = y + 5;
// }
// console.log('Stopped');

// for(let n = 0; n < 4; n = n + 1) {
//     console.log(items[n]);
// }

