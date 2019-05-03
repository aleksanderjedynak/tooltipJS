let globalTooltip = null;


function positionTooltip(e){
    globalTooltip.style.top = (e.clientY + 30) + "px";
    globalTooltip.style.left = (e.layerX + 30) + "px";
}

function createTooltip(e){
    let tooltip = document.createElement('div');
    if (e.type === 'mouseover'){
        tooltip.classList.add('tooltip');
        tooltip.textContent = e.target.title;
        globalTooltip = tooltip;
        e.target.removeAttribute('title');
        document.querySelector('.box').appendChild(tooltip);   
    }else if (e.type === 'mouseout') {
        e.target.setAttribute('title', globalTooltip.textContent);
        globalTooltip.parentNode.removeChild(globalTooltip);
    }
    
}

function createEventTooltip(elem, typeEvent, fun) {
    elem.addEventListener(typeEvent, fun, false);
}

(function generateTooltip(tooltips){
    for (let index = 0; index < tooltips.length; index++) {
        const element = tooltips[index];
        createEventTooltip(element, 'mouseover', createTooltip);
        createEventTooltip(element, 'mouseout', createTooltip);
        createEventTooltip(element, 'mousemove', positionTooltip);
    }
})(document.querySelectorAll('*[title]'))

