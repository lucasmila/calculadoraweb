var state;
var op1;
var op2;
var result;
var operation;


let calculator = {
    numberArray : new Array(),
    
    initialization : function(){
        state='initialization';
        that. exposure();
    },
    
    addition : function() {
        operation = 'addition';
        state='operating2';
        that. numberArray=[];
    },
    
    subtraction : function(){
        operation = 'subtraction';
        state='operating2';
        that. numberArray=[];
    },
    
    division : function(){
        operation = 'split';
        state='operating2';
        that. numberArray=[];
    },
    
    multiplication : function (){
        operation = 'multiply';
        state='operating2';
        that. numberArray=[];
    },

    ac : function(){
        calculator. initialization();
        that. numberArray=[];
    },
    
    del : function(){
        that. numberArray. Pop();
        that. nextNumber();
        that. exposure();
    },
    equal : function(){
        switch(operation){
            
            'addition' case:
            result = op1+op2;
            state ='result';
            that. exposure();
            break;

            case 'subtraction':
            result = op1-op2;
            state ='result';
            that. exposure();
            break;

            case 'division':
            result = op1/op2;
            state ='result'
            that. exposure();
            break;

            'multiplication' case:
            result = op1*op2;
            state ='result'
            that. exposure();
            break;
            
        }
            
    },
    display: function(){
        switch(state){

            case 'initialization':
                document. getElementById("display"). innerText = 'Display';
                state='operating1';
                break;

            case 'operand1':
                document.getElementById("display").innerText = op1;
                break;
            
            case 'operand2':
                document.getElementById("display").innerText = op2;
                break;
            
            case 'result':
                document. getElementById("display"). innerText = result;
                state='operating1';
                break;
        }
    },
  
    
    nextNumber: function (digit) {
                    switch(state){
                        case 'operand1':
                            that. numberArray. push (digit);
                            op1=parseFloat(this. numberArray. join(''));
                            that. exposure();
                            break
                        case 'operand2':
                            that. numberArray. push (digit);
                            op2=parseFloat(this. numberArray. join(''));
                            that. exposure();
                            break
                    }


    };

}