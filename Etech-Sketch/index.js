let btn=document.querySelector('.btn');
let container = document.querySelector('.container');
      container.innerHTML = ""; // clear old boxes


btn.addEventListener('click',()=>{
    let pro=prompt('Enter a number of boxes you want to create');
    let side = Math.sqrt(Number(pro));
    let boxSize = 100 / side;         // percentage width

      for (let i = 0; i < Number(pro); i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.flex = `0 1 ${boxSize}%`; // width depends on side
        container.appendChild(div);
      }
    })
     