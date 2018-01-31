function loadRepos() {
    $.ajax({
        url: "https://api.github.com/users/ivaylo91/repos",
        method: "GET",
        success: display,
        error: errorDisplay
    });
}

function display(repos) {
    let output = document.getElementById('result');
    output.innerHTML = '<ul>';
    for (let repo  of repos) {
        output.innerHTML += `<li>${JSON.stringify(repo.name)}</li>`;
    }
    output.innerHTML += '</ul>';
}

function errorDisplay() {
    throw new Error('Invalid URL');
}