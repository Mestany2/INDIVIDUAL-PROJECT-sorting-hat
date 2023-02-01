const houses=['Gryffindor', 'Slytherin', 'Ravenclaw','Hufflepuff'];
const students = [
    {
     id: 5,
     name:'Harry',
     houseName:'myhouse',
     
    },  
    {
     id: 2,
     name: 'Sciffles',
     houseName:'Gryffindor',
    },
    {
      id: 2,
      name: 'Paul',
      houseName:'test',
    } ,

];
const expelledStudents =[];

//Show items on the DOM
const renderToDom =(divId,htmlToShow)=>{
 const selectedDiv= document.querySelector(divId);
 selectedDiv.innerHTML= htmlToShow
};

//Hide the form till clicked
const hideForm= () =>{
    document.getElementById("container").style.display ='none'
};
const showForm= ()=>{
    document.getElementById("container").style.display ='block'
};

//Click the start button to show the form
const eventListener = () => {
    startBtn.addEventListener('click', showForm)
};

// //Hide the form and call the function for the button
// const starting = ()=> {
//     eventListener();
//     hideForm();
// };
// starting();

//Create the students cards for First Year
const cardsOnDom = (array) => {
    let domString =''
    for (const item of array){
        domString +=`<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div id="demobox">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.houseName}</p>
              <button type="button" class="btn btn-danger" id= "expel--${item.id}">EXPEL</button>
            </div>
          </div>
        </div>
      </div>`;
    }
    renderToDom('#sortedStudents', domString);
}
cardsOnDom(students);


//Create Cards for Voldy Army
const voldyOnDom = (array) => {
  let domString =''
  for (const item of array){
      domString +=`<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div id="demobox">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.houseName}</p>
            <button type="button" class="btn btn-danger" id= "expel--${item.id}">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`;
  }
  renderToDom('#theArmy', domString);
}
voldyOnDom(expelledStudents);

//Get info from the form and push it to the array
 let studentIdCount = 1
 const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const newStudent={
      id: studentIdCount,
      name: document.querySelector("#studentName").value,
      houseName: houses[Math.floor(Math.random()*houses.length)]
    }  
    console.log(newStudent);
    students.push(newStudent); 
    studentIdCount ++
    cardsOnDom(students)
    form.reset();
  });

//Expelled students 
const cardDiv=document.querySelector("#sortedStudents");
cardDiv.addEventListener("click", (event)=>{
  if (event.target.id.includes ("expel")){
    const[,studentId]= event.target.id.split("--");
    students.forEach((item, index) => { 
      if (item.id  === Number(studentId)){
      expelledStudents.push(item);
      students.splice(index, 1);
      item.houseName = 'VolyArmy';
      cardsOnDom(students)
      voldyOnDom(expelledStudents)
      console.log(expelledStudents)
    };
  });
  };
});
  














