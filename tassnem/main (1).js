let btnback=document.querySelector('button');
btnback.addEventListener('click',()=>{
window.history.back();
})
const search=()=> {
    const searchbar = document.querySelector('search-input').value.toUpperCase();
    const searchproduct = document.querySelectorAll('.searchproduct');
    const storeitems=document.querySelector('search-products-list');
    const productname = storeitems.getElementsByTagName("h2");
    for (var i = 0; i < productname.length; i++) {
        let match=searchproduct[i].getElementsByTagName('h2')[0]
        if(match){
            let textvalue=match.textContent||match.innerHTML
            
            
            if(textvalue.toUpperCase().indexof(searchbar)>-1){
                searchproduct[i].style.display="";
            }
            else{
                searchproduct[i].style.display="none";
            }
        }
    }
}