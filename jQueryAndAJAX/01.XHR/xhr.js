function loadRepos() {
    let req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        if (req.status === 404) {
            document.getElementById('result').textContent = "Error 404 - Not Found";
            return;
        }
        let repos = JSON.parse(req.responseText);
        let output = document.getElementById('result');
        output.innerHTML = '<ul>';
        for (let repo  of repos) {
            output.innerHTML += `<li>${JSON.stringify(repo.name)}</li>`;
        }
        output.innerHTML += '</ul>';
    });
    req.open("GET", "https://api.github.com/usersers/ivaylo91/repos", true);
    req.send();
}