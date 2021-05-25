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


