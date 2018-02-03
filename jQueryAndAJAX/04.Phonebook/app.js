$(() => {
    const list = $('#list');
    const baseUrl = "https://phonebook-app-dc226.firebaseio.com/phonebook";
    $('#btnCreate').on('click', create);
    loadContacts();

    function loadContacts() {
        $.ajax({
            url: baseUrl + ".json",
            success: displayContacts,

        });
    }

    function displayContacts(data) {
        list.empty();
        for (let contact in data) {
            let html = $(`<li>${data[contact].name} : ${data[contact].phone}</li>`);
            html.append($(`<button>Delete</button>`).on('click', (() => deleteContact(contact))));
            list.append(html);
        }
    }

    function create() {
        let contact = {
            name: $('#nameCrt').val(),
            phone: $('#phoneCrt').val()
        };

        $.ajax({
            url: baseUrl + ".json",
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

    function deleteContact(contact) {
        $.ajax({
            url: `${baseUrl}/${contact}.json`,
            method: 'DELETE',
            success: loadContacts,
            error: displayError
        })
    }
});