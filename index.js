const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',function () {
	swal({
  title: "Sabia que dirias que si, pero...",
  text: "¿Te gusta el sushi 🍣?",
  icon: "warning",
  buttons: true,
  dangerMode: false,
}).then((willDelete) => {
  if (willDelete) {
    swal("Lo sabia, Te quiero mucho 💖", {
      icon: "success",
    });
    setTimeout( function() { window.location.href = "https://www.youtube.com/watch?v=yvJp0B_74Tg"; }, 6000 );
  } else {
    swal("Perdona, Pero creo que no somos compatibles 😔");
  }
});
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})