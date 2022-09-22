console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37



function f1(){
    return this;
  }
  
  // No navegador
  f1() === window; // true