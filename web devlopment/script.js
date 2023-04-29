let namstebtn = document.querySelector('button');
namstebtn.addEventListener('click',showmsg);

function showmsg(){
    let name = prompt('enter name of student');
    namstebtn.textContent="pay the bills as soon as possible"+name;
}


