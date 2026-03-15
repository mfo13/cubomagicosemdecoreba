async function loadComponent(id, file)
{
const response = await fetch(file);
const text = await response.text();
document.getElementById(id).innerHTML = text;
}

loadComponent("menu","components/menu.html");
loadComponent("footer","components/footer.html");