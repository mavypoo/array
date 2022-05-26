// push front - start w/ [1,2,4, 5, 6] insert the val = 3 at the front; output should be [3,1,2,4]

function push_front(arr, val){
    for(var i = arr.length - 1; i >=0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val;
}
var array = [1,2,4,5,6];
push_front(array, 3);
console.log(array);
//output 3,1,2,4,5,6

// 1,2,4,5,6
// 1,2,4,5,6,6
// 1,2,4,5,5,6
// 1,2,4,4,5,6
// 1,2,2,4,5,6
// 1,1,2,4,5,6
// 3,1,2,4,5,6
// example used export function main() {
//     var arr = [1, 2, 3, 4, 5, 5];
//     for(var i=arr.length-1; i>0; i--){
//         arr[i] = arr[i-1];
//     }
// }



//pop front

function pop_front(arr) {
    var val = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return val;
}    
console.log(pop_front([1, 2, 4, 5, 6]))
//1,2,4,5,6
//2,2,4,5,6
//2,4,4,5,6
//2,4,5,5,6
//2,4,5,6,6
//2,4,5,6

//example used
// 1, 1, 2, 3, 4, 5  I want to shift everything to the right so it is 1, 2, 3, 4, 5, 5 = use a for loop and reassignment. 
// export function main() {
//     var arr = [1, 1, 2, 3, 4, 5];
//     for(var i=1; i < arr.length; i++){
//         arr[i-1] = arr[i]; // will shift the value to the left by 1
//     }
// }
    //output 1,2, 3, 4, 5, 5


//Insert At [1, 2, 4, 5, 7]; insert val 6 at index 3
function insert_at(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {  
        arr[i+1] = arr[i]; 
    }
    arr[ind] = val; 
}
var array = [1,2,4,5,7];
insert_at(array,6,3);
console.log(array);
    //output 1,2,4,6,5,7

    //1,2,4,5,7
    //1,2,4,5,7,7
    //1,2,4,5,5,7
    //1,2,4,6,5,7

