const allBtn = document.getElementsByClassName('seat-btn');
const nextButton = document.getElementById('next-btn');
let count = 0;
let seatLeft = 40;
let price =0;
let show= [];
let totalPrice = 0;
for (const btn of allBtn){
    btn.addEventListener("click",function(e){
    if( count < 3  ){
        btn.classList.add('bg-green-400'); 
        }
        else if(count === 3 ) {
            const coupon=  document.getElementById('coupon-btn');
            coupon.removeAttribute('disabled');
            btn.classList.add('bg-green-400'); 
            coupon.classList.add('bg-green-500'); 
            coupon.classList.remove('bg-red-600'); 
        }
    else{
        alert("You can not purches more than 4 Ticket at a time");
        return; 
    }
    btn.removeEventListener("click", arguments.callee);
    count =parseInt (count + 1);
    setInnerText('seat-count',count);
    seatLeft=parseInt (seatLeft - 1);
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
    const updateTotalPrice = parseInt(count * perticketPrice) ;
    setInnerText('total-price',updateTotalPrice);
    setInnerText('grand-total',updateTotalPrice) ;
    const couponBtn = document.getElementById('coupon-btn');
    const fiftenpersent = parseInt(updateTotalPrice*.15); 
    const twentyPersent = parseInt(updateTotalPrice*.20); 
    const discountField= document.getElementById('discount-show-area');
    // coupon field hide option
   if (count===4){
    const couponField = document.getElementById('discount-field')
    couponBtn.addEventListener('click',function(){
        const couponInputString = document.getElementById('coupon-input');
        const couponValue = couponInputString.value;
         if(couponValue ==='NEW15'){
            discountField.classList.remove('hidden');
            couponField.classList.add('hidden');
            const grandFinalTotal1 = updateTotalPrice - fiftenpersent; 
            setInnerText('grand-total',grandFinalTotal1);
            setInnerText('discount-amount', (fiftenpersent));
        } else if(couponValue === 'Couple 20'){
            // setInnerText('grand-total',grandFinalTotal2)
            discountField.classList.remove('hidden');
            couponField.classList.add('hidden');
            const grandFinalTotal2 = updateTotalPrice - twentyPersent;
            setInnerText('grand-total', grandFinalTotal2);
            setInnerText('discount-amount',twentyPersent);
        } else{
            alert( "submit a valid coupon number");
        }
    })  
   }
   
})
}
function setInnerText (id,value){
    document.getElementById(id).innerText = value;
}


