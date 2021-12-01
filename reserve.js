var res = []

function logfunction(){
  var info = document.getElementsByTagName("input")
  for(let i = 0; i < info.length;i++){
    if (info[i].value !== "Submit"){
      console.log(info[i].value);
      res.push(info[i].value);
    }
  }
}

console.log(res);
