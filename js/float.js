function getPos(e){
    x=e.clientX;
    y=e.clientY;
    cursor="Your Mouse Position Is : " + x + " and " + y ;
    document.getElementById("displayArea").innerHTML=cursor;
    document.getElementById("testarea").innerHTML=cursor;    
    
    document.getElementById('image-gthf').style.zIndex="4";
    document.getElementById('image-gthf').style.display='block';
    document.getElementById('image-gthf').style.top=y-50+'px';
    document.getElementById('image-gthf').style.left=x+100+'px';

}

function stopTracking(){
    document.getElementById("displayArea").innerHTML="";       
    document.getElementById('image-gthf').style.display='none';
}


function getPos2(e){
    a=e.clientX;
    b=e.clientY;
    cursor2="Your Mouse Position Is : " + a + " and " + b ;
    document.getElementById("displayArea2").innerHTML=cursor2;            
    document.getElementById('image-tot').style.display='block';
    document.getElementById('image-tot').style.top=b-50+'px';
    document.getElementById('image-tot').style.left=a+100+'px';
}

function stopTracking2(){
    document.getElementById("displayArea2").innerHTML="";       
    document.getElementById('image-tot').style.display='none';
}

function getPos3(e){
    u=e.clientX;
    v=e.clientY;
    cursor3="Your Mouse Position Is : " + u + " and " + v ;
    document.getElementById("displayArea3").innerHTML=cursor3;            
    document.getElementById('image-dsc').style.display='block';
    document.getElementById('image-dsc').style.top=v-50+'px';
    document.getElementById('image-dsc').style.left=u+100+'px';
}

function stopTracking3(){
    document.getElementById("displayArea3").innerHTML="";       
    document.getElementById('image-dsc').style.display='none';
}