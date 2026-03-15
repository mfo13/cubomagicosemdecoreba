async function loadComponent(id, file)
{
const response = await fetch(file);
const text = await response.text();
document.getElementById(id).innerHTML = text;
}

loadComponent("menu","/cubomagicosemdecoreba/components/menu.html");
loadComponent("footer","cubomagicosemdecoreba/components/footer.html");