function loadRepos() {
    $.get("https://api.github.com/users/ivaylo91/repos").then(display);
}

function display(repos) {
    let output = document.getElementById('result');
    output.innerHTML = '<ul>';
    for (let repo  of repos) {
        output.innerHTML += `<li>${JSON.stringify(repo.name)}</li>`;
    }
    output.innerHTML += '</ul>';
}