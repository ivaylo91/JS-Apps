function loadRepos() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let repos = JSON.parse(req.responseText);
            let output = document.getElementById('result');
            for (let repo  of repos) {
                output.textContent += `${JSON.stringify(repo)}\n`;
            }
        }
    };
    req.open("GET", "https://api.github.com/users/ivaylo91/repos", true);
    req.send();
}