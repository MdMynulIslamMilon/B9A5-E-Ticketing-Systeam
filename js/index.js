const allBtn = document.getElementsByClassName('seat-btn');
const phone = document.getElementById('number-id');
let count = 0;
let seatLeft = 40;
let price =0;
let show= [];
let totalPrice = 0;
for (const btn of allBtn){
    btn.addEventListener("click",function(e){
    if( count >3 ){
        alert("You can not purches more than 4 Ticket at a time");
        return;  
        }
        else if(count === 3 ) {
            const coupon=  document.getElementById('coupon-btn');
            coupon.removeAttribute('disabled');
            coupon.classList.add('bg-red-200');
            btn.classList.add('bg-green-400'); 
        }
     else{
        btn.classList.add('bg-green-400');    
    }
    btn.removeEventListener("click", arguments.callee);
    count = count + 1;
    setInnerText('seat-count',count);
    seatLeft= seatLeft - 1;
    setInnerText('seat-left',seatLeft);
    const seatNumber = e.target.innerText;
    const showSeatnumber = document.getElementById('selected-option');
    const ul =document.createElement('ul');
    ul.classList.add('flex');
    ul.classList.add('gap-12');
    ul.classList.add('font-sans');
    showSeatnumber.classList.add('border-b');
    showSeatnumber.classList.add('border-black');
    const li = document.createElement('li');
    li.textContent =seatNumber;
    const li2 = document.createElement('li');
    li2.textContent='Economy Class';
    const li3 = document.createElement('li');
    li3.textContent ='550';
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    showSeatnumber.appendChild(ul);
    const perticketPrice  = parseInt(li3.innerText);
    const updateTotalPrice = count * perticketPrice ;
    setInnerText('total-price',updateTotalPrice);
    const couponBtn = document.getElementById('coupon-btn');
    couponBtn.addEventListener('click',function(){
        const couponInputString = document.getElementById('coupon-input');
        const couponValue = couponInputString.value;
         if(couponValue ==='NEW15'){
            const grandFinalTotal1 = updateTotalPrice - updateTotalPrice*.15; 
            setInnerText('grand-total',grandFinalTotal1);
        } else if(couponValue === 'Couple 20'){
            // setInnerText('grand-total',grandFinalTotal2)
            const grandFinalTotal2 = updateTotalPrice - updateTotalPrice*.20; 
            setInnerText('grand-total', grandFinalTotal2)
        } else{
            alert( "submit a coupon number");
        }
    })   
})
}
function setInnerText (id,value){
    document.getElementById(id).innerText = value;
}


