var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$.ajax({
    url: 'https://github.com/Alexa6748/Alexa6748.github.io-CSV_project/blob/main/csv_data.csv',
    dataType: 'text',
}).done(successFunction); 

function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow< allRows.length; singleRow++) {
        if (singleRow ===0) {
            table+= '<thead>';
            table+='<tr>';
        } else {
            table+='<tr>';
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
            if (singleRow === 0) {
                table+='<th>';
                table+=rowCells[rowCell];
                table+='</th>'; 
            } else {
                table+='<td>';
                table+=rowCells[rowCell];
                table+='</td>';
            }
        }
        if (singleRow === 0) {
            table+='</tr>';
            table+='</thead>';
            table+='<tbody>';
        } else {
            table+='</tr>';
        }
    }
    table+='</tbody>';
    table+='</table>';
    $('bode').append(table);
}
