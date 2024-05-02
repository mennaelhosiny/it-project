
window.alert('do you want compars-site to send you notification ?')

function searchFunction() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("searchResults");
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var itemText = li[i].textContent || li[i].innerText;
        if (itemText.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {

    var sectionTitles = document.querySelectorAll('.section');

    var descriptions = document.querySelectorAll('.description');

    sectionTitles.forEach(function (title) {
      title.addEventListener('click', function () {

        descriptions.forEach(function (description) {
          description.classList.add('hidden');
        });

        var description = this.nextElementSibling;
        description.classList.toggle('hidden');
      })
    });
  });

  let btnback=document.querySelector('button');
btnback.addEventListener('click',()=>{
window.history.back();
})

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('switch-style-btn');
    button.addEventListener('click', function() {
        var themeLink = document.getElementById('theme-link');
        if (themeLink.getAttribute('href') === 'style.css') {
            themeLink.href = 'dark-light.css';
        } else {
            themeLink.href = 'style.css';
        }
    });
});

// validation
function searchFunction() {
    var searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() === "") {
        alert("Please enter a search query.");
        return false;
    }
    return true;
}

window.onload = function() {
    var form = document.getElementById("searchForm");
    form.onsubmit = function() {
        return searchFunction();
    };
};