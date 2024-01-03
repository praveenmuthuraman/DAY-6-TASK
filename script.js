class Person {
  constructor(firstName,age,DOB, country,state, city,education,skills,language) {
 
      this.firstName = firstName;
      this.age = age;
      this.DOB = DOB;
      this.country = country;
      this.state="TamilNadu"
      this.city = city;
      this.education = education;
      this.skills = skills;
      this.language = "Tamil & English";
  }
}

const person1 = new Person("Asabeneh", "22","28/03/2001","india",this.state,"madurai","BE","Programing Language",this.language);

console.table(person1);
