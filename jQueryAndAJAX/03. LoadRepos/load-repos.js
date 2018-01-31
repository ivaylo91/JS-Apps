function loadRepos() {
    let username = $('#username').val();

    $.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        method: "GET",
        success: display,
        error: errorDisplay
    });
}

function display(repos) {
    let output = document.getElementById('result');
    output.innerHTML = '<ul>';
    for (let repo  of repos) {
        output.innerHTML += `<li>${(repo.name)}</li>`;
    }
    output.innerHTML += '</ul>';
}

function errorDisplay() {
    throw new Error('Invalid URL');
}