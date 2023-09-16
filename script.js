const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === "developer");
    developers.forEach((developer) => {
      console.log(
        `Name: ${developer.name}, Age: ${developer.age},Profession: ${developer.profession}`
    );
    });
  }
  //printDeveloper();
  
  // 2. Add Data
  function addData() {
     let name = prompt("enter your name");
     let age = prompt("enter your age");
     let profession = prompt("enter your profession");
     let obj = { name: name, age: Number(age), profession: profession };
     data.push(obj);
     console.log("Data Added Successfully! if you wish to add another data,please click on same button")
     console.log(obj);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filtereddata = data.filter(person => person.profession !== "admin");
    console.log("admin removed !", filtereddata);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const arr1 = [1, 2, 3];
    console.log("arr1", arr1);
    const arr2 = [4, 5, 6];
    console.log("arr2", arr2);
    const res = arr1.concat(arr2);
    console.log("concatened array ", res);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = 0;
    for(let i=0; i<data.length; i++){
        totalAge += data[i].age;
    }
    console.log("Total Age: ", totalAge);
    let avgAge = totalAge/data.length;
    console.log("average age ", avgAge);
  }
  //averageAge();

  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0; i<data.length; i++){
        if(data[i].age >= 25){
            console.log(data[i]);
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
     for(let i=0;i<data.length;i++){
          if(arr.includes(data[i].profession)==true){
               continue;
          }else{
               arr.push(data[i].profession);
          }
     }
     console.log(arr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) =>a.age - b.age);
    console.log("Sorted by Age Ascending",data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let profession = prompt("enter the profession");
    let obj = {name: "john", age: 24, profession: profession}
    data.push(obj);
    console.log("John's Updated Profession", obj);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
        let developerCount =0;
        let adminCount =0;
        for(let i =0;i<data.length;i++){
            const profession = data[i].profession;
            if(profession ==="developer"){
                developerCount++;
            }else if(profession ==="admin"){
                adminCount++;
            }
        } 
        console.log("Total Developers",developerCount);
        console.log("Total Admins",adminCount);
       
  }