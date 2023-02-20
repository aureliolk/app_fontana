let lastScrollPosition = 0;
let scrolledUp = false;
let scrolledDown = false;


window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
      // o usuário rolou para baixo
      if (!scrolledDown ) {
        scrolledDown = true;
        scrolledUp = false;
        funcaoRolagemParaBaixo();
      }
    } else {
      // o usuário rolou para cima
      if (!scrolledUp) {
        scrolledUp = true;
        scrolledDown = false;
        funcaoRolagemParaCima();
      }
    }
    
    lastScrollPosition = currentScrollPosition;
  });
  
  function funcaoRolagemParaCima() {
    
    console.log('O usuário rolou para cima');
    document.querySelector(".navbar-toggler").style.display = ""

  }  
  function funcaoRolagemParaBaixo() {
    document.querySelector(".navbar-toggler").style.display = "none"
    
    console.log('O usuário rolou para baixo');
    
  }
  
  const btn1 = document.querySelector(".btn.first")
  if(btn1){
    btn1.onclick = ()=>{
      var inputValueBtn1 = document.querySelector("input#currency1")
      window.open(`https://api.whatsapp.com/send?phone=5586994706241&text=Ol%C3%A1,%20gostaria%20de%20simular%20meu%20saque%20FGTS.%20Saldo%20FGTS:%20R$%20${inputValueBtn1.value}`, '_blank');
    }
  }

  const btn2 = document.querySelector(".btn.secondary")
  if(btn2){
    btn2.onclick = ()=>{
    var inputValueBtn2 = document.querySelector("input#currency2")
      window.open(`https://api.whatsapp.com/send?phone=5586994706241&text=Ol%C3%A1,%20gostaria%20de%20simular%20meu%20saque%20FGTS.%20Saldo%20FGTS:%20R$%20${inputValueBtn2.value}`, '_blank');
    }
  }