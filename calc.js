const sumInt = (a,b) =>
{
  return a+b;
}
const substractionInt = (a,b) =>
{
  return a-b;
}
const divisionInt = (a,b) =>
{
  return a/b;
}
const multiplicationInt =(a,b) =>
{
  return a*b;
}
const power = (a,pow) =>
{
  let res=1;
  while(pow>0)
  {
    pow--
  //  if(pow==0)return a;
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

}
const absolute = (a) =>
{
  if(a<0)a*=-1;
  return a;
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
  return a*(-1);
}
const percent=(a,b)=>
{
  return a/b*100;
}

const sine=(a) =>
{
  let pi=3.1415926535;
  const b = a%=360;
  let rad =b * pi/180;
  let sin=0.0;
  for(i=0;i<1000;++i)
  {
    let top=power(-1,i) * power(rad, 2*i + 1);
    let bottom=factorial(2 * i +1);
    sin+=top/bottom;
  }
  return sin;
}
const cosine=(a) =>
{
  let pi=3.14159265359;
  a%=360;
  let rad =a * pi/180;
  let cos=0.0;
  for(i=0;i<7;++i)
    cos += power(-1,i) * power(rad, 2*i) / factorial(2 * i);
  return cos;
}
console.log(cosine(30));
