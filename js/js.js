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