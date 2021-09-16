//information counter 
const counters = document.querySelectorAll('.counter');
const speed = 1000; 

counters.forEach(counter => {
    const updateCounter = () => {
        const target = Number (counter.getAttribute('data-count'));
        const count = Number (counter.innerHTML);
        const increment = target / speed ; 
       
        if(count < target) {
            counter.innerHTML= Math.ceil(count + increment);
            setTimeout(updateCounter,1);
        }else{
            count.innerHTML = target;
        }
    }
    updateCounter();

});
