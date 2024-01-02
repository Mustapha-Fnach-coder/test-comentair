let input = document.querySelector('input');
let btn= document.querySelector("button");
let como= document.querySelector('.comentaire');
btn.addEventListener('click',()=>{
    var p = document.createElement('p');
    let com = input.value;
    p.textContent=com;
    como.appendChild(p);
    p.style.cssText='width:150px;;background-color:red;padding:10px;border:solid 3px black;border-radius: 35px;'
})
