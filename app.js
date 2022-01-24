const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => { //notice the lack of paranthesis around the parameter, this is due to the arrow functions.
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log("==============");
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);