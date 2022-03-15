$(document).ready(function () {
    let url = 'https://gateway.marvel.com/v1/public/characters?apikey=605ddd9fbc97b9ea7923bd1f876a498b&ts=99999&hash=c29ee2d1294e3c3aa1c59bfe1fb86488'
    $.get(url, function(data, status){
        let personajes = data.data.results
        let content = ''
        personajes.forEach(element => {
            content += `
                <div>
                    <div class=" rounded-md aspect-square bg-blue-500 bg-center bg-cover" style="background-image: url(${element.thumbnail.path}.${element.thumbnail.extension});"></div>
                    <p class="text-xl font-semibold text-center">${element.name}</p>
                </div>
            `
        });
        $("#content").html(content)
    })
})