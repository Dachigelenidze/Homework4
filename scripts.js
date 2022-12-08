// პირველი
let array = [ 5, 25, 89, 120, 36]; 
array.push('javascript','python')
array.unshift('html', 'css')
array.shift();
array.pop();
console.log(array.length);
console.log(array);

//მეორე
let array2 = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log(array2.length);
array2.push('ვაშლი', 'ანანასი');
array2.unshift('საზამთრო');
console.log(array2.length);
array2.splice(2,0,'მანგო');
array2.shift();
array2.pop();
console.log(array2);
console.log(array2.length);

//მესამე

let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
let result = array3.map(item => item / 3)
console.log(result);

//მეოთხე
let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let result1 = array4.filter(item => typeof item == 'number')
console.log(result1);

//მეხუთე

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result2 = languages.filter(item => item.length >3)
console.log(result2);

//მეექვსე
let array5 = [12, 'google', 32, null, 'yahoo', 25];

let result3 = array5.map(item => {
    if(typeof item === 'number'){
        return Math.pow(item, 2);
    }
    else if (typeof item === 'string'){
        return item.toUpperCase();
    }
        return item;
    
})
console.log(result3);



//მეშვიდე
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let result4 =words.filter(item => item.includes("m") || item.includes("M")) ;
console.log(result4);


//მერვე

let arr = [1, 2, 3, 4, 5];
let result5 = 0;
arr.forEach(item => {
  result5 += item;
})
console.log(result5);
 

//მეცხრე
let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let result6 = numbers.filter(item => item > 0);
console.log(result6);

//მეათე

let array6 =[1, 2, 3, 4, 5]
array5.splice(3,0,'a', 'b', 'c')
console.log(array6);



