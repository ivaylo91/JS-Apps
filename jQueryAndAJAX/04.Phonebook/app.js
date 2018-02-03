$(() => {
    const list = $('#list');
    $('#btnCreate').on('click', create);
    loadContacts();

    function loadContacts() {
        $.ajax({
            url: "https://phonebook-app-dc226.firebaseio.com/phonebook.json",
            success: displayContacts,

        });
    }

    function displayContacts(data) {
        list.empty();
        for (let contact in data) {
            list.append(`<li>${data[contact].name} : ${data[contact].phone}</li>`);
        }
    }

    function create() {
        let contact = {
            name: $('#nameCrt').val(),
            phone: $('#phoneCrt').val()
        };

        $.ajax({
            url: "https://phonebook-app-dc226.firebaseio.com/phonebook.json",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(contact),
            success: loadContacts,
            error: displayError
        });
    }

    function displayError(err) {
        notify(`Error:${err.statusText}`);
    }

    function notify(message) {
        let toast = document.getElementById('notification');
        toast.textContent = message;
        toast.style.display = 'block';

        setTimeout(() => toast.style.display = 'none', 2000);
    }
});