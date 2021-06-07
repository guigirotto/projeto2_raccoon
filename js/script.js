var display = 'none';


function exibir(txt_hide, tit, arrow) {
    
     
    if(display == 'none'){
            document.getElementById(txt_hide).style.display = 'block';
            document.getElementById(tit).style.fontWeight = 'bold';
            document.getElementById(arrow).style.transform ='rotate(180deg)'
            document.getElementById(arrow).style.transition = '0.3s'
            document.getElementById(arrow).style.marginTop = '15px';
            display = 'block';
    }else{
         document.getElementById(txt_hide).style.display = 'none';
         document.getElementById(tit).style.fontWeight = '300';
         document.getElementById(arrow).style.transform ='rotate(0deg)';
         document.getElementById(arrow).style.marginTop = '0px';
         display = 'none';
    }
       
}


var elemento = document.querySelectorAll("#lista li");
for (var i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("click", function (e) {
        var mudar = document.getElementById('change_p');
        var pos = this.innerText;
        if(pos == 'Competência 1'){
            mudar.innerHTML = '<span>Esta seção visa explicar as competências que os alunos possuirão uma vez que concluírem o curso.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris.'
        }
        if(pos == 'Competência 2'){
            mudar.innerHTML = '<img style="width: 200px; margin-left: 90px; margin-top: -43px;" src="img/chris.jpg">'
        }
        if(pos == 'Competência 3'){
            mudar.innerHTML = 'COMPETÊNCIA 3<br><br><span>Esta seção visa explicar as competências que os alunos possuirão uma vez que concluírem o curso</span><br><br><br><br>';
        }
        if(pos == 'Competência 4'){
            mudar.innerHTML = 'COMPETÊNCIA 4<br><br><span>Esta seção visa explicar as competências que os alunos possuirão uma vez que concluírem o curso</span><br><br><br><br>';
        }
    })
}


var slides = document.querySelectorAll('.carousel__slide');
var btns = document.querySelectorAll('.carousel__btn');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
    slide.classList.remove('active');
    
        btns.forEach((btn) => {
        btn.classList.remove('carousel__active');
            });
    });
    
        slides[manual].classList.add('active');
        btns[manual].classList.add('carousel__active');
}
    
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
    });
});


// =========================== FORMULÁRIO ===============================
var modal = document.getElementsByClassName("formulario")[0];
var span = document.getElementsByClassName("formulario__close")[0];
function open_modal(){
  modal.style.display = "block";
}


function close_modal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ============================verificar checkbox e fazer requisição =================================

function req(){
    let checkbox = document.getElementById('termo');
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("tel").value
    let prof = document.getElementById("prof").value

    if(nome == ""){
        alert("Nome não informado");
        return;
    }
    if( email=="" || email.indexOf('@')==-1 || email.indexOf('.')==-1 ){
        alert( "Por favor, informe um E-MAIL válido!!" );
        return;
    }
    
    if(telefone == ""){
        alert("Telefone não informado")
        return;
    }
    if(prof == ""){
        alert("Profissão não informada")
        return;
    }

    
    if(checkbox.checked) {
        event.preventDefault()
        let url = "http://localhost:7777/interessados"
        body = {
            "id": Math.floor(Math.random() * 10000000),
            "name": nome,
            "telefone": telefone,
            "profissão": prof,
            "email": email
        }

        fazPost(url, body)

        // ======================== Fecha o Modal ===================================
        alert('dados cadastrados com sucesso' );
        var modal = document.getElementsByClassName("formulario")[0];
        modal.style.display = "none";
    } else {
        alert('É necessário concordar com os termos');
    }
}

//=======================================================================================

//========================== MASCARA TELEFONE =============================

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js
  
    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
  })



  const masks = {
    phone (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
  }  

  //=====================================================================


  function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    
}