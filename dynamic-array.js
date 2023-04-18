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
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
    return this.length;
    // Your code here
  }


  pop() {
    if (this.length === 0) return undefined;
    this.length--;
    let ele = this.data[this.length];
    this.data[this.length] = undefined;
    return ele;
    // Your code here
  }

  shift() {
    if (this.length === 0) return undefined;
    let ele = this.data[0];
    for (let i = 1; i < this.length; i++){
      this.data[i-1] = this.data[i];
    }
    this.length--;
    return ele;
    // Your code here
  }

  unshift(val) {
    if (this.length === this.capacity) this.resize();
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1];
      }
      this.data[0] = val;
      this.length++;
      return this.length;
    // Your code here
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === val) return i;
    }
    return -1;
    // Your code here
  }

  resize() {
    // Your code here 0b00000100
    //15 => 16, 16; 16 => 17, 17; 17 => 18, 18; 18 => 19, 19 //32! - 16!
    //15 =>16, 32; 16 => 17, 1
    this.capacity *= 2;
    let newArray = new Array(this.capacity);
    for (let i = 0; i < this.length; i++){
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }

}


module.exports = DynamicArray;
