
// social icons

const hornBtn = document.querySelector('.social-icons span');
hornBtn.addEventListener('click', () => {
    document.querySelector('.social-icons-list').classList.toggle('socialIconsToggle');
});

// search bar 

const searchInput = document.querySelector("#search-bar");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://duckduckgo.com/?q=" + input + "&t=h_&ia=web";
};
