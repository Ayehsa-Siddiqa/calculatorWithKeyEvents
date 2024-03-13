/**
  * Get Numbers function 
  * 
  */ 
 let firstNum;
 let secNum;
 let turn = 0;
 let operation;
 let result = 0;
 let num1Array = [];
 let num2Array = [];
 let display = document.querySelector(".form-control");
   const numVal = (num) => { 
     if(turn === 0 || turn === 1){
       num1Array.push(num);
       firstNum = parseInt(num1Array.join(''));
       display.value = firstNum;
       turn = 1;
     }

     if (turn === 2 ){
        num2Array.push(num);
        secNum = parseInt(num2Array.join(''));
        display.value = secNum;
     }

   }

   const Operator = (op) => {
       operation = op;  
       turn = 2; 
   }
    const resultFunc = () => {
        if(operation === '*'){
          result = firstNum * secNum;
        }
        else if(operation === '+'){
          result = firstNum + secNum;
        }
        else if(operation === '/'){
          result = firstNum / secNum;
        }
        else if(operation === '-'){
          result = firstNum - secNum;
        }
        else if(operation === '%'){
          result = firstNum % secNum;

        }
        display.value = result;
    }

    /**
     * Clear function
    */
   const clearFunc = () => {
     location.reload();
     display.value = '';
   }
   
  /**
   * add keyboard events
   */
   document.addEventListener('keydown',(e) =>{
      const key = e.key;
      if(!isNaN(key)){
         numVal(key);
      }
      else if(key ==='+' || key === '-' || key === '/' || key === '*' || key === '%'){
        Operator(key);
      }
      else if(key === '=' || key === 'Enter'){
        resultFunc();
      }
      else if(key === 'Backspace'){
        clearFunc();
      }
   });

 