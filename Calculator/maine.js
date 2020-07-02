class Claculator {
    constructor(previousTextElement, currentTextElement){
    this.previousTextElement = previousTextElement
    this.currentTextElement = currentTextElement
    this.clear()
    
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete () {
  
    }
  
    appendNumber(number) {
       this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
   chooseOperation(operation) {
  
   }
  
  compute() {
  
  }
  
  updateDisplay() {
     this.currentOperandTextElement.innerText = this.currentOperand
  }
  
  }
  }
  
  
  const numberButtons = document.querySelectorAll(['data-number'])
  const operationButtons = document.querySelectorAll(['data-operation'])
  const equalsButton = document.querySelector(['data-equals'])
  const deleteButton = document.querySelector(['data-delete'])
  const allClearButton = document.querySelector(['data-all-clear'])
  const previousTextElement = document.querySelector(['data-previous-operand'])
  const currentTextElement = document.querySelector(['data-current-operand'])


  const claculator = new Claculator (previousOperandTextElement, currentOperandTextElement)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      claculator.appendNumber(button.innerText)
      claculator.updateDisplay()
    } )
  })