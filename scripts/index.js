const changePage = (e) => {
    e.preventDefault();

    const page = e.target.id;

    window.location.href = `/pages/${page}.html`;
}

document.querySelector(".button-form").addEventListener("click", changePage)