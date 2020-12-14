let count = 1

function prevSlide(){
    if( count != 1){
        console.log('ok')
        count -= 1
        window.location.href = `http://127.0.0.1:5500/index.html#slide-${count}`;
    }
}
function nextSlide(){
    if( count != 3){
        console.log('ok')
        count += 1
        window.location.href = `http://127.0.0.1:5500/index.html#slide-${count}`;
    }
}
