
let inp = document.getElementById('inp');
let containerList = document.getElementById('container-list');
let btnAdd = document.getElementById('btnAdd');


btnAdd.addEventListener("click", () => {


    if (inp.value == '') {
        alert("enter your task");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        containerList.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        savaData();
    }
    
    inp.value = '';

    
});



containerList.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("check");
        savaData();
    }

    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savaData();
    }
});



function savaData() {
    localStorage.setItem('data', containerList.innerHTML);
}

function retDAta() {
    if (localStorage.getItem("data") === null) {
        containerList.innerHTML = '';
    }
    
    else
    {
        containerList.innerHTML = localStorage.getItem("data");
    }
    }

retDAta();

