const gallery = document.getElementById('gallery');

window.onmousemove = e=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX= gallery.offsetWidth - window.innerWidth;
    const maxY= gallery.offsetHeight - window.innerHeight;

    const panX = xDecimal * maxX * -1
    const panY = yDecimal * maxY * -1

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    },{
        duration: 40000,
        fill: 'forwards',
        // easing: 'ease'
    })
}