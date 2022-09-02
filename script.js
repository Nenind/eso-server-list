flag = false
document.querySelector(".my-servers-button").addEventListener('click', event => {
    event.preventDefault()
    if (!flag) {
        document.querySelector('.my-servers-form').style.display = "grid";
        flag = true
    } else {
        document.querySelector('.my-servers-form').style.display = "none";
        flag = false
    }
})

servers = document.querySelectorAll(".server-list-item")
document.querySelector(".theme-toogle").addEventListener("click", event => {
    event.preventDefault()
    document.body.classList.toggle("doki-theme");
    for (i = 0; i < servers.length; ++i) {
        servers[i].classList.toggle("server-list-item-doki");
    }
});

document.querySelectorAll(".server-enter-data").forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault()
        document.querySelector('#serverParamsForm').style.display = "block";
})});

document.querySelector(".server-enter-data-cancel").addEventListener('click', event => {
    event.preventDefault()
    document.querySelector('#serverParamsForm').style.display = "none";
})