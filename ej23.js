let a = 0;
let b = 1;
console.log(a);
console.log(b);

for(let i=1;i<9;i++)
{
    
    if(i%2==0)
    {
        b=a+b;
        console.log(b);
    }
    else
    {
        a=a+b
        console.log(a);
    }
}
