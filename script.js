document.addEventListener("DOMContentLoaded", function() {
  let ini = window.innerWidth
  console.log(ini)
  let me = document.getElementById("me")
  let mi = document.getElementById("mi")
  let input = document.querySelector("#name")
  let text = document.querySelector("#coment")
  
  me.addEventListener("click", function() {
    setTimeout(function() {
      input.value = "Tim Recruitment"
      text.value = "Hallo Dika, Kami dari Tim Recruitment. Segera balas pesan ini jika kamu tertarik untuk bergabung"
    }, 800);
  })
  
  mi.addEventListener("click", function () {
    var nomorTujuan = '6289607337878';
    var pesan = input.value + " : " + text.value;
    var url = 'https://api.whatsapp.com/send?phone=' + nomorTujuan + '&text=' + encodeURIComponent(pesan);
    window.open(url);
  })
})