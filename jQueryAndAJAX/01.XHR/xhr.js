function loadRepos() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let repos = JSON.parse(req.responseText);
            let output = document.getElementById('result');
            output.innerHTML = '<ul>';
            for (let repo  of repos) {
                output.innerHTML += `<li>${JSON.stringify(repo.name)}</li>`;
            }
            output.innerHTML+= '</ul>';
        }
    };
    req.open("GET", "https://api.github.com/users/ivaylo91/repos", true);
    req.send();
}