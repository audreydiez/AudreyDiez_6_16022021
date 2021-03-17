// SELECT
const filtersWrapper = document.getElementById("select-wrapper");
const filterBtn = document.getElementById("button-select");
const filterList = document.getElementById("list");

const backgroundSelect = document.getElementById("focus-filters");

const options = Array.from(document.getElementsByClassName("option"));
let selected;


// Hide list filters
filterList.style.display = "none";


filterBtn.addEventListener("click", e => {
    e.preventDefault();
    expandList();
});


function expandList (){
    if (filterList.getAttribute("expanded") === "false"){
        filterList.style.display = "flex";
        filterList.setAttribute("expanded", "true");
        backgroundSelect.style.display = "flex";

    }
}

filtersWrapper.addEventListener("click", (e) => e.stopPropagation());
backgroundSelect.addEventListener("click", closeList);


options.forEach(option => {
    option.addEventListener("click", e => {
        e.preventDefault();
        if (filterList.getAttribute("expanded") === "true"){
            closeList();
            selected = option.getAttribute("id");
        }
        filterList.addEventListener('click', (e) => e.stopPropagation());


    })
})

function closeList () {
    filterList.setAttribute("expanded", "false");
    filterList.style.display = "none";
    backgroundSelect.style.display = "none";
}
//SELECT