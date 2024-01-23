function handleClickBtn(data){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = data.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = data.parentNode.childNodes[5].innerText.split(" ")[2];
    console.log(price)
}