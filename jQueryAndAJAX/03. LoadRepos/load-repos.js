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
    let output = $('#result');
    let list = $('<ul>');
    for (let repo  of repos) {
        $(`<li>${(repo.name)}</li>`).appendTo(list);
    }
    output.append(list);
}

function errorDisplay() {
    throw new Error('Invalid URL');
}