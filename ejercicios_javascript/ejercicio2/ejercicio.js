$(document).ready(function () {
    let boton = $('#boton')
    
    
    $(boton).click(function () {
        $('#contenedor').addClass('h-auto')
        let url ='https://raw.githubusercontent.com/finiterank/mapa-colombia-js/master/colombia-municipios.json'
        $.get(url, function (data, status) {
            let info = JSON.parse(data)
            let content = ''
            info.objects.mpios.geometries.forEach(element => {
                let rowData = element.properties
                content += `
                    <tr>
                        <td class="border py-2">${rowData.dpt}</td>
                        <td class="border py-2">${rowData.name}</td>
                    </tr>
                `
            })
            $('#tbody').html(content)
        })
    })
})
