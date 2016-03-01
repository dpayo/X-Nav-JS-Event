
  function init(){
    var x = document.getElementById("text");
    x.addEventListener ("input",OntextInput);

  }
  function OntextInput(){
    document.getElementById("body").style.background=this.value

  }
