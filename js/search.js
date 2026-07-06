/* ==========================================
   Global Search
========================================== */

const input = document.getElementById("searchInput");

const results = document.getElementById("searchResults");

if(input){

input.addEventListener("input",function(){

const value=this.value.trim().toLowerCase();

results.innerHTML="";

if(value===""){

results.style.display="none";

return;

}

const matches=searchDatabase.filter(item=>

item.title.toLowerCase().includes(value) ||

item.description.toLowerCase().includes(value)

);

if(matches.length===0){

results.innerHTML=`<div class="search-item">

No results found.

</div>`;

results.style.display="block";

return;

}

matches.forEach(item=>{

const div=document.createElement("div");

div.className="search-item";

div.innerHTML=`

<h4>${item.title}</h4>

<p>${item.description}</p>

`;

div.onclick=()=>{

window.location=item.url;

};

results.appendChild(div);

});

results.style.display="block";

});

document.addEventListener("click",e=>{

if(!e.target.closest(".search-section")){

results.style.display="none";

}

});

}
