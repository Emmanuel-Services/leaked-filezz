/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var codes = new Array(
    72627,
    83637,
    82725,
    73528,
    62424,
    12526,
    42426,
    00590,
    16760,
    20605,
    67600,
    50000,
    14736,
    00900,
    00100,
    62628,
    52526,
    81648,
    81645,
    54645,
    61246,
    12137,
    31575,
    21879,
    31945,
    52525,
    08267,
    61218,
    05484,
    12485,
    64218,
    54648,
    21248,
    21576,
    61976,
    64246,
    64645,
    31675,
    64667,
    51646,
    13787,
    147369,
)
for (let k =0;k < codes.length;k++) {
    function confirm() {
        var a = document.getElementsByName("code")[0].value;
        if(a == codes[k] ) {
        let replace = document.getElementById("replace");
        replace.innerHTML = '<br><p>Code Correct Use The Button Below to Download Via Google Drive</p><br><a href="https://www.drive.google.com/drive/folders/1qkcGbbctHNuNfOHsJ-RYnpyJH8Fv7tPP?usp=sharing" class="btn btn-lg btn-success" target="_blank" style="width:98%; padding:5px;">Download</a>';
        console.log('Access Granted')
        } else {
        let replace = document.getElementById("replace");
        replace.innerHTML = '<br><br><p>Incorrect Please Check The Code</p>';
        }
        
    }
}

var image = ["images/Screenshot_20220921-045918_1.png"];
var num =0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num>= image.lenght) {
        num =0;
    }
    slider.src = image[num];
}
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = image.lenght - 1;
        num =0;
    }
    slider.src = image[num];
}
