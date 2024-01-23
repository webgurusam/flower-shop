let total = 0;
function handleClickBtn(data){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = data.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    const count = selectedItemContainer.childElementCount;
    if((count+1) <= 5){
        li.innerHTML = `${count+1}. ${itemName}`;
        li.style.listStyleType = 'none';

        selectedItemContainer.appendChild(li);
        const price = data.parentNode.childNodes[5].innerText.split(" ")[2];
        total += parseFloat(price);
        document.getElementById('total').innerText = total;
    }
    else{
        alert('you can not select more than 5 items');
    }

}
function submitCouponCode(){
    const discount = document.getElementById('discount');
    const payableAmount = document.getElementById('payable-amount');

    if(document.getElementById('discount-field').value === 'HERO'){
        discount.innerText = (total * 20 / 100)
        payableAmount.innerText = total - (total * 20 / 100);
    }
    else{
        payableAmount.innerText = total;
    }
}