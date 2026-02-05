let arr=[1,45,78,6]
let new_arr=[]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    new_arr.push(element**2)
}
console.log(new_arr)