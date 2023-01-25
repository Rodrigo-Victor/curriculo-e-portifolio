let resultado = document.querySelector("#resultado");

// ADICIONAR NUMEROS
function add(x) {
  resultado.value += x
}

// ADICIONAR OPERADORES
function addOp(x) {
  if (resultado.value == '') {
    resultado.value = ''
  } else if (test3() == true) {
    resultado.value = test2(x)
  }else if(test() == true) {
    iqual()
    resultado.value += x
  } else {
    resultado.value += x
  }
}

// RESULTADO
function iqual() {

  if(resultado.value.indexOf('+') != -1) {
    let newRes = resultado.value.split('+')
    newRes = Number(newRes[0]) + Number(newRes[1])
    resultado.value = newRes
  }
  if(resultado.value.indexOf('-') != -1) {
    let newRes = resultado.value.split('-')
    newRes = Number(newRes[0]) - Number(newRes[1])
    resultado.value = newRes
  }
  if(resultado.value.indexOf('*') != -1) {
    let newRes = resultado.value.split('*')
    newRes = Number(newRes[0]) * Number(newRes[1])
    resultado.value = newRes
  }
  if(resultado.value.indexOf('/') != -1) {
    let newRes = resultado.value.split('/')
    newRes = Number(newRes[0]) / Number(newRes[1])
    resultado.value = newRes
  }
}

// LIMPAR
function cleear() {
   resultado.value = '';
}

// TESTE PARA TER SOMENTE UM OPERADOR
function test() {
  if(resultado.value.indexOf('/') != -1 || resultado.value.indexOf('*') != -1 || resultado.value.indexOf('-') != -1 || resultado.value.indexOf('+') != -1) {
    return true
  }
}
// TESTE PARA TROCAR OPERADOR
function test2(x) {
  let t = resultado.value[resultado.value.length-1]
  
  if( t == "/"){
    let res = resultado.value.replace("/", x)
    return res
  } else if (t == "*") {
    let res = resultado.value.replace("*", x)
    return res
  } else if (t == "-") {
    let res = resultado.value.replace("-", x)
    return res
  } else if (t == "+") {
    let res = resultado.value.replace("+", x)
    return res
  }
}
// test PARA VERIFICAR SE O ULTIMO DIGITE É UM OPERADOR
function test3() {
  let t = resultado.value[resultado.value.length-1]
  
  if(t == "/" || t == "*" || t == "-" || t == "+") {
    return true
  }
}