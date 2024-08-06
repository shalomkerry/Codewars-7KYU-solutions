Array.prototype.revese = function () {
    for(let i = 0, j=this.length-1;i<j;i++,j--){
        let temp = this[i];
        this[i] = this[j];
        this[j]=temp
    }
    return this
}
let array = ['a','b','c'];
console.log(array.revese())