function loadRepos() {
    let req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        let repos = JSON.parse(req.responseText);
        let output = document.getElementById('result');
        output.innerHTML = '<ul>';
        for (let repo  of repos) {
            output.innerHTML += `<li>${JSON.stringify(repo.name)}</li>`;
        }
        output.innerHTML += '</ul>';
    });
    req.open("GET", "https://api.github.com/users/ivaylo91/repos", true);
    req.send();
}