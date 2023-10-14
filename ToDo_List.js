var ar = [];
var a2 = '';
function add()
    {
            
        var x = document.getElementById('search').value;
        ar.push(x);
        var a = '';
        for(var i=0; i < ar.length; i++)
        {
            a = '> ' + ar[i] + ' <div class="col-lg-offset-2"></div><div class="btn btn-info">Delete</div>' + '<br><br>';
            ar.pop(x);
            a2 += a;
        }
        document.getElementById('out').innerHTML = a2;
    } 