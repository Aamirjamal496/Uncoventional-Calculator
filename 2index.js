const defaultResult = 0;
let currentResult = defaultResult;
let logInfo;

// Input Function:
function GetUserInput() {
  let GetUserInput = parseInt(userInput.value);
  return GetUserInput;
}

// Function for Description:
function CreateAndWriteOutput(Operator, CalcBeforeResult, CalculationResult) {
  const calcDescription = `${CalcBeforeResult}${Operator}${CalculationResult}`;
  outputResult(currentResult, calcDescription);
}

// All Logical Fucntions:
function CalcLogic(Operation, CalBeforeResult, Result) {
  const initialResult = currentResult;
  const enterednum = GetUserInput();
  let mathoperator;
  if (!enterednum) {
    return;
  }
  if (Operation === "Addition") {
    currentResult += enterednum;
    logInfo = {
      Operation: "Addition",
      PrevResult: initialResult,
      Result: currentResult,
    };
    mathoperator = "+";
    console.log(logInfo);
    CreateAndWriteOutput(mathoperator, initialResult, enterednum);
  } else if (Operation === "Subtraction") {
    currentResult -= enterednum;
    logInfo = {
      Operation: "Subtraction",
      PrevResult: initialResult,
      Result: currentResult,
    };
    mathoperator = "-";
    console.log(logInfo);
    CreateAndWriteOutput(mathoperator, initialResult, enterednum);
  } else if (Operation === "Multiplication") {
    currentResult *= enterednum;
    logInfo = {
      Operation: "Multiplication",
      PrevResult: initialResult,
      Result: currentResult,
    };
    mathoperator = "*";
    console.log(logInfo);
    CreateAndWriteOutput(mathoperator, initialResult, enterednum);
  } else if (Operation === "Division") {
    currentResult /= enterednum;
    logInfo = {
      Operation: "Division",
      PrevResult: initialResult,
      Result: currentResult,
    };
    mathoperator = "/";
    console.log(logInfo);
    CreateAndWriteOutput(mathoperator, initialResult, enterednum);
  }
}
// Addition Function:
function add() {
  CalcLogic((Operation = "Addition"));
}

// Subtraction Function:
function Subtract() {
  CalcLogic((Operation = "Subtraction"));
}

// Multiply Function:
function Multip() {
  CalcLogic((Operation = "Multiplication"));
}

// Division Function:
function divide() {
  CalcLogic((Operation = "Division"));
}
AddBTn.addEventListener("click", add);
subtractBtn.addEventListener("click", Subtract);
multiplyBtn.addEventListener("click", Multip);
divivdeBtn.addEventListener("click", divide);
