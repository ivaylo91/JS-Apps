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

function displayError(error) {
    console.log("Error:" + error.responseText);
}