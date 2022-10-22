/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var codes = 72627;
var ebook= 55667;
var courses = 77617;
function confirm() {
    var a = document.getElementsByName("code")[0].value;
    if(a === codes) {
        let replace = document.getElementById("replace");
        replace.innerHTML = '<br><p>Code Correct Use The Button Below to Download Via Google Drive</p><br><a href="https://www.drive.google.com/drive/folders/1qkcGbbctHNuNfOHsJ-RYnpyJH8Fv7tPP?usp=sharing" class="btn btn-lg btn-success" target="_blank" style="width:98%; padding:5px;">Download</a>';
        console.log('Access Granted');
    } else if (a === courses){
        let replace = document.getElementById("replacez");
        replace.innerHTML = '<br><p>Code Correct Use The Button Below to Download Via Google Drive</p><br><a href="https://drive.google.com/drive/folders/1J5ahq829SxaF8fEedilZgR6YkmbBZfZD?usp=sharing" class="btn btn-lg btn-success" target="_blank" style="width:98%; padding:5px;">Download</a>';
        console.log('Access Granted');
    } else if (a === ebook) {
        let replace = document.getElementById("replacey");
        replace.innerHTML = '<br><p>Code Correct Use The Button Below to Download Via Google Drive</p><br><a href="https://drive.google.com/drive/folders/1JNpoJzIStNyvp_2RNv-STU1aHDnr5H2X?usp=sharing" class="btn btn-lg btn-success" target="_blank" style="width:98%; padding:5px;">Download</a>';
        console.log('Access Granted');
    } else if (a != codes) {
        let replace = document.getElementById("replace");
        replace.innerHTML = '<br><br><p>Incorrect Code Please Check The Code</p>';
    } else if (a != ebook) {
        let replace = document.getElementById("replacey");
        replace.innerHTML = '<br><br><p>Incorrect Code Please Check The Code</p>';
    } else if (a != courses) {
        let replace = document.getElementById("replacez");
        replace.innerHTML = '<br><br><p>Incorrect Code Please Check The Code</p>';
    } else {
        let replace = document.getElementById("replace");
        replace.innerHTML = '<br><br><p>Bro, Don't Stress Me Abeg.</p>';
    }
        
}
