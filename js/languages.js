const languages = [

{
flag:"🇪🇸",
name:"Spanish",
learners:"42M Learners"
},

{
flag:"🇫🇷",
name:"French",
learners:"23M Learners"
},

{
flag:"🇺🇸",
name:"English",
learners:"20M Learners"
},

{
flag:"🇯🇵",
name:"Japanese",
learners:"18M Learners"
},

{
flag:"🇩🇪",
name:"German",
learners:"16M Learners"
},

{
flag:"🇮🇳",
name:"Hindi",
learners:"14M Learners"
},

{
flag:"🇰🇷",
name:"Korean",
learners:"12M Learners"
},

{
flag:"🇮🇹",
name:"Italian",
learners:"10M Learners"
},

{
flag:"🇨🇳",
name:"Chinese",
learners:"9M Learners"
},

{
flag:"🇷🇺",
name:"Russian",
learners:"7M Learners"
},

{
flag:"🇵🇹",
name:"Portuguese",
learners:"4M Learners"
},

{
flag:"🇹🇷",
name:"Turkish",
learners:"3M Learners"
}

];

function displayLanguages(list){

$("#languageContainer").html("");

list.forEach(language=>{

$("#languageContainer").append(`

<div class="col-lg-3 col-md-4 col-sm-6">

<div class="language-card">

<div class="flag">
${language.flag}
</div>

<h5>
${language.name}
</h5>

<p class="learners">
${language.learners}
</p>

</div>

</div>

`);

});

}

displayLanguages(languages);

$(document).on(
"click",
".language-card",
function(){

window.location.href=
"select-native-language.html";

});

$("#searchBox").on("keyup",function(){

let value=$(this).val().toLowerCase();

let filtered=
languages.filter(language=>

language.name
.toLowerCase()
.includes(value)

);

displayLanguages(filtered);

});