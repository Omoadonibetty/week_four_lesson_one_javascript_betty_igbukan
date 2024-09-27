const displayUserInfo = (DOB, year, name, location) => {
    const birthYear = new Date(DOB).getFullYear();
    const age = year - birthYear;
  
    console.log(`Hello ${name} from ${location}, your current age is ${age}.`);
  
    return age;
  };
  
  displayUserInfo('2022-09-27', 2024, 'Betty', 'Abuja');
  