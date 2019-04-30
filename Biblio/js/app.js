$(function () {
    console.log("ready")
let tbody = $(`tbody`)
    $.ajax({
    url: "http://127.0.0.1:8000/book",
    type: "GET",
    dataType: "json"
}).done(function(response) {

    for(let item of response){
        let htmlelement = $(
            `<tr data-toggle="collapse" 
                data-target="#collapseExample${item.id}">
                <th scope = "row" data-toggle="collapse" data-target="#collapseExample${item.id}">${item.id}</th>
                <td>${item.title}</td>
                <td>${item.isbn}</td>
                <td>${item.author}</td>
            </tr>
            <tr>
                <td colspan="4">
                    <div class="collapse" id="collapseExample${item.id}">
                    <div class="card card-body" style="background: #1a4149">
Książka ${item.title} o numerze ISBN ${item.isbn} została napisana przez ${item.author} oraz wydana przez ${item.publisher}. Jest to książka z gatunku ${item.genre}.
                    </div>
                    </div>
                </td>
            </tr>`)
        tbody.append(htmlelement)
    }

});

})

