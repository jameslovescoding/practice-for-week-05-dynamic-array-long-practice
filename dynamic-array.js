class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
    // Your code here
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
    // if (this.length === this.capacity) {
    //   this.resize();
    // }
    return this.length;
    // Your code here
  }


  pop() {
    this.length--;
    let ele = this.data[this.length];
    this.data[this.length] = undefined;
    return ele;
    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;