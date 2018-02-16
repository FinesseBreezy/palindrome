function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  for (var i in output) {
    output[i]=output[i].toLowerCase();
    return output;
  }
}
function check() {
  var x = document.getElementById("myText").value;
  a = x.split("");
  c = x;
  if (x.length < 1){
    $('#output').text('Please Populate the textfield')
  }
  if (x != ""){
    b = reverse(a);
    b = b.join("");
    c = c.replace(/\s/g, '');
    b = b.replace(/\s/g, '');
    if(c.toLowerCase() == b.toLowerCase()){
      document.getElementById("output").innerHTML = "It is a palindrome!";
    }else{
      document.getElementById("output").innerHTML = "It is not a palindrome";
    }
  }
}
function enter(){
  $("#myText").keyup(function(event) {
    if (event.keyCode === 13) {
      check();
    }
  });
}
