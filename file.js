var numbers = [4, 3, 1, 2, 5, 6];
var total = 5;
pares(numbers, total);


function pares(points, valor) {
var total = 0;
var orden = points.sort(function(a, b){return a-b});
//console.log(orden);
    for ($i=0; $i<= orden.length; $i++){
        if (points[$i] <= valor){
            for ($x=$i+1; $x<= orden.length; $x++){
                if (points[$x] <= valor){
                    var suma = parseInt(points[$i])+parseInt(points[$x]);
                    //console.log(points[$i]+'..'+points[$x]+'..sumatoria es ..'+suma);
                    if (valor == suma){
                         var arre = [[points[$i],points[$x]]];
                        console.log(arre.toString());

                    }
                }
            }
        }
    }
}
