

export const isOneWord = (word)=>{
return /^\S+$/.test(word)
}



export const reloadOnclick = ()=>{

const leftTitle  = document.getElementById('title-left');
const rightTitle = document.getElementById('title-right');

leftTitle.href = '/'
rightTitle.href = '/'

leftTitle.onclick = (event)=>{
    event.preventDefault();
    window.location.reload();
};

rightTitle.onclick =(event )=>{
    event.preventDefault();
    window.location.reload();
}
}