var btn=document.querySelector('button')
btn.onclick=function(){
    var title=document.querySelector('p')
    var cls=title.getAttribute('class')
    {
        if(cls=='red'){
            title.classList.remove('red')
            title.classList.add('white')
        }
        else{
            title.classList.add('red')
            title.classList.remove('white')
        }
    }
}