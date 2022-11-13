const tbody = document.querySelector(".tbody");

let number = 0;
let names = ['Faarax','Mohamed','Yaasiin','Haashim','Mukhtaar'];
let subjects = ['English','Math','Saynis','Carabi','English'];
let datas = ['90%','75%','54%','100%','40%'];

functionTb();

function functionTb() {

   function groupA() {

    const tr = document.createElement("tr");

    const num = document.createElement("td");
    num.textContent = number = 1;
    tr.append(num);
 
    const name = document.createElement("td");
    name.textContent = names[0];
    tr.append(name);
 
    const subject = document.createElement("td");
    subject.textContent = subjects[0];
    tr.append(subject);
 
    const data = document.createElement("td");
    data.textContent = datas[0];
    tr.append(data);
  
    tbody.append(tr);

   }

   function groupB() {

    const tr = document.createElement("tr");

    const num = document.createElement("td");
    num.textContent = number = 2;
    tr.append(num);
 
    const name = document.createElement("td");
    name.textContent = names[1];
    tr.append(name);
 
    const subject = document.createElement("td");
    subject.textContent = subjects[1];
    tr.append(subject);
 
    const data = document.createElement("td");
    data.textContent = datas[1];
    tr.append(data);
  
    tbody.append(tr);

   }

   function groupC() {

    const tr = document.createElement("tr");

    const num = document.createElement("td");
    num.textContent = number = 3;
    tr.append(num);
 
    const name = document.createElement("td");
    name.textContent = names[2];
    tr.append(name);
 
    const subject = document.createElement("td");
    subject.textContent = subjects[2];
    tr.append(subject);
 
    const data = document.createElement("td");
    data.textContent = datas[2];
    tr.append(data);
  
    tbody.append(tr);

   }

   function groupD() {

    const tr = document.createElement("tr");

    const num = document.createElement("td");
    num.textContent = number = 4;
    tr.append(num);
 
    const name = document.createElement("td");
    name.textContent = names[3];
    tr.append(name);
 
    const subject = document.createElement("td");
    subject.textContent = subjects[3];
    tr.append(subject);
 
    const data = document.createElement("td");
    data.textContent = datas[3];
    tr.append(data);
  
    tbody.append(tr);

   }

   function groupE() {

    const tr = document.createElement("tr");

    const num = document.createElement("td");
    num.textContent = number = 5;
    tr.append(num);
 
    const name = document.createElement("td");
    name.textContent = names[4];
    tr.append(name);
 
    const subject = document.createElement("td");
    subject.textContent = subjects[4];
    tr.append(subject);
 
    const data = document.createElement("td");
    data.textContent = datas[4];
    tr.append(data);
  
    tbody.append(tr);

   }

  groupA();
  groupB();
  groupC();
  groupD();
  groupE();

}