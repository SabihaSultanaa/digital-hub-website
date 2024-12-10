let box = document.querySelector("#card");




let img = 1
function left() {
    if (img === 1) {
        box.setAttribute("class", "image1")
        img = 2;
    }
    else if (img === 2) {
        box.setAttribute("class", "image2")
        img = 3;
    }
    else if (img === 3) {
        box.setAttribute("class", "image3")
        img = 4;
    }
    else if (img === 4) {
        box.setAttribute("class", "image4")
        img = 5;
    }
    else if (img === 5) {
        box.setAttribute("class", "image5")
        img = 6;
    }
    else if (img === 6) {
        box.setAttribute("class", "image6")
        img = 7;
    }
    else if (img === 7) {
        box.setAttribute("class", "image7")
        img = 1;
    }

}
function right() {
    if (img === 1) {
        box.setAttribute("class", "image7")
        img = 2;
    }
    else if (img === 2) {
        box.setAttribute("class", "image6")
        img = 3;
    }
    else if (img === 3) {
        box.setAttribute("class", "image5")
        img = 4;
    }
    else if (img === 4) {
        box.setAttribute("class", "image4")
        img = 5;
    }
    else if (img === 5) {
        box.setAttribute("class", "image3")
        img = 6;
    }
    else if (img === 6) {
        box.setAttribute("class", "image2")
        img = 7;
    }
    else if (img === 7) {
        box.setAttribute("class", "image1")
        img = 1;
    }
}
let uname =document.querySelector("#uname")
let uerror =document.querySelector("#uerror")
let pwd =document.querySelector("#pwd")
let pwd2 =document.querySelector("#pwd2")
let perror =document.querySelector("#perror")
let p2error =document.querySelector("#p2error")
let flag =true;
function formValidate(){
if
    (uname.value=""){uerror.innerText="Username is Epmty";
        flag=false;
    }
    else if(uname,value.length<3){uerror.innerHtml="Username is required min 3 char";
        flag=false;}
        else{flag=true;
            uerror.innerHTML="";}

            if(pwd.value==""){perror.innerHTML="Password is required min 8 characters";
            flag=false;
        }
        else if(pwd.value!=ped2.value){p2error.innerHtml="password not matched";
            flag=false;
        }
        else{flag=true;
            perror.innerHTML="";
            p2error.innerHTML="";
            return flag;
        }
    }



    // this is slide bar work
    function show(){
        document.querySelector('.hamburger').classList.toggle('open')
        document.querySelector('.navigation').classList.toggle('active')
      }