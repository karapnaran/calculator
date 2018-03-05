const sumInt = (a,b) =>
{
  return Math.round(a+b);
}
const substractionInt = (a,b) =>
{
  return Math.round(a-b);
}
const divisionInt = (a,b) =>
{
  return Math.round(a/b);
}
const multiplicationInt =(a,b) =>
{
  return Math.round(a*b);
}
const power = (a,pow) =>
{
  let res=1;
  while(pow>0)
  {
    pow--
    res*=a;
  }
  return res;
}
const factorial =(a)=>
{
  let res=1;
  do {
    if(a!=0)res*=a;
  } while (a--);
  return res;
}
const root=(a,pow) =>
{
  return a** (pow ** -1);
}
const absolute = (a) =>
{
  return a>0 ? a : -a;
}
const mod =(a,b) =>
{
  return a%b;
}
const log =(a,base) =>
{
  let res=0;
  while(a)
  {
    a/=base;
    ++res;
  }
  return res;
}
const flipsign =(a)=>
{
  return -a;
}
const percent=(a,b)=>
{
  return a/b*100;
}

const sine=(a) =>
{
  const b = a%=360;
  let rad =b * Math.PI/180;
  let sin=0.0;
  for(i=0;i<10;++i)
  {
    let top=power(-1,i) * power(rad, 2*i + 1);
    let bottom=factorial(2 * i +1);
    sin+=top/bottom;
  }
  return sin;
}
const cosine=(a) =>
{
  a%=360;
  let rad =a * Math.PI/180;
  let cos=0.0;
  for(i=0;i<10;++i)
    cos += power(-1,i) * power(rad, 2*i) / factorial(2 * i);
  return cos;
}
const integral=(func,a,b,precision)=>{
  let sum=0;
  for(let i=a;i<b;i+=precision)
  {
    sum+=func(i)*precision;
  }
  return sum;
}
const textField = document.getElementById("expression-field");
const buttons =
  document.querySelectorAll('.button-group button:not(.long-button)');
const equalsButton = document.getElementById("equals");
buttons.forEach(currentButton => {
  currentButton.addEventListener('click', event => {
    if (textField.value === '0') {
      textField.value = currentButton.innerText;
    } else {
      textField.value += currentButton.innerText;
    }
  })
})

equalsButton.addEventListener('click', event => {
  textField.value = calculateResult(textField.value);
})  
