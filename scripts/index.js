const changePage = (e) => {
    e.preventDefault();

    const page = e.target.id;

    window.location.href = `/getpower-test/pages/${page}.html`;
}

document.querySelector(".button-form").addEventListener("click", changePage)