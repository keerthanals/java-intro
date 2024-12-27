let input = prompt("Enter a number between 0 and 1 million ")
let value = Number(input)
if(value > 0 && value<1000000){
    let sum=0
    for(let i=1;i<=value;i++){
        sum+=i

    }
    document.write("Sum of numbers upto ", value," is ",sum)
}
else {
    alert("Invalid Number")
    document.write("Try using numbers between 0 and 1 Million")
}