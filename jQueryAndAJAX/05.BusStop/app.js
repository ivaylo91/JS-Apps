// valid data to IDs 1287, 1308, 1327 and 2334.

function getInfo() {
    let stopId = $('#stopId').val();
    $.ajax({
        method: "GET",
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success: displayBuses,
        error: displayError
    });
}

function displayBuses(data) {
    $('#stopName').text(data.name);

    for (let bus in data.buses) {
        $('#buses').append($(`<li>`).text(`Bus ${bus} arrives in ${data['buses'][bus]} minutes`));
    }
}

function displayError() {
    $('#stopName').text("Error");
}
