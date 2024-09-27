const displayUserBio = ({ gender, occupation }) => {
    console.log(`The user is a ${gender} and works as a ${occupation}.`);
  };
  
  const userBio1 = {
    occupation: 'Engineer',
    height: '6ft',
    gender: 'Male',
    nationality: 'Nigerian'
  };
  
  const userBio2 = {
    occupation: 'Doctor',
    height: '5.5ft',
    gender: 'Female',
    nationality: 'American'
  };
  
  const userBio3 = {
    occupation: 'Artist',
    height: '5.8ft',
    gender: 'Non-binary',
    nationality: 'Canadian'
  };
  
  displayUserBio(userBio1);
  displayUserBio(userBio2);
  displayUserBio(userBio3);
  