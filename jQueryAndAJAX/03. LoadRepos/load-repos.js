function loadRepos() {
    $('#result').text('Loading...');
    $('#btnLoad').prop('disabled', true);

    let username = $('#username').val();
    $.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        method: "GET",
        success: display,
        error: errorDisplay,
        complete: () => $('#btnLoad').prop('disabled', false)
    });
}

function display(repos) {
    let output = $('#result');
    let list = $('<ul>');
    for (let repo  of repos) {
        $(`<li><a href="${repo.html_url}" target="_blank"> ${(repo.name)}</a></li>`).appendTo(list);
    }
    output.html(list);
}

function errorDisplay() {
    throw new Error('Invalid URL');
}