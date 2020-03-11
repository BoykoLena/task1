let n;

function getElemBlack () {
    let inputArray = document.getElementsByTagName("li");
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i].style.color = "black";
    }
}

function selectFirstChild () {
    getElemBlack ();
    let inputArray = document.getElementsByTagName("li");
    let firstChild = inputArray[0];
    firstChild.style.color = "red";
    n = 0;
}

function selectLastChild () {
    getElemBlack ();
    let inputArray = document.getElementsByTagName("li");
    let lastChild = inputArray[inputArray.length - 1];
    lastChild.style.color = "red";
    n = inputArray.length - 1;
}

function appendLastChild () {
    getElemBlack ();
    n = 0;
    let newItem = document.createElement("li");
    newItem.innerHTML = "Новый элемент списка";
    document.getElementById("myUl").appendChild(newItem);
}

function deleteLastChild() {
    let mainObj = document.getElementById("myUl");
    for(let i = mainObj.childNodes.length - 1; i > 0; i--) {
        let child = mainObj.childNodes[i];
        if (child.nodeType === 1) {
            mainObj.removeChild(child);
            break;
        } 
    }
}

function appendFirstChild () {
    getElemBlack ();
    let mainObj = document.getElementById("myUl");
    let newItem = document.createElement("li");
    newItem.innerHTML = "Новый элемент списка";
    for(let i = 0; i < mainObj.childNodes.length; i++) {
        let child = mainObj.childNodes[i];
        if (child.nodeType === 1) {
            mainObj.insertBefore(newItem, child);
            break;
        } 
    }
}

function selectNextItem () {
    let inputArray = document.getElementsByTagName("li");
    if (n >= 0 && n < inputArray.length - 1 && inputArray[n].style.color === "green") {
        inputArray[n].style.color = "black";
        inputArray[n + 1].style.color = "green";
        n = n + 1; 
    }
    else if (n >= 0 && n < inputArray.length - 1 && inputArray[n].style.color === "red") {
        inputArray[n].style.color = "black";
        inputArray[n + 1].style.color = "green";
        n = n + 1;
    } 
    else {
        inputArray[0].style.color = "green";
        inputArray[inputArray.length - 1].style.color = "black";
        n = 0;
    }    
}

function selectPreviousItem () {
    let inputArray = document.getElementsByTagName("li");
    if (n <= inputArray.length - 1 && n > 0) {
        inputArray[n].style.color = "black";
        inputArray[n - 1].style.color = "green";
        n = n - 1; 
    }
    else {
        inputArray[inputArray.length - 1].style.color = "green";
        inputArray[0].style.color = "black";
        n = inputArray.length - 1;
    }    
}

