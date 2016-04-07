var request = require('request');
var options = {
  method: 'GET',
  json: {},
  uri: 'https://api.clever.com/v1.1/sections?limit=382',
  headers: {
    Authorization: 'Bearer DEMO_TOKEN'
  }
};

var sectionData;
var studentCountPerSection = [];
var totalStudents = 0;

request(options, function(err, response, body) {
  sectionData = body.data;
  // console.log(body.data[0].data.students.length);

  sectionData.forEach(function(section){
    var studentCount = section.data.students.length;
    totalStudents += studentCount;
    studentCountPerSection.push(studentCount);
  })

  console.log("Total Students: ", totalStudents);
  console.log("# of Sections: ", studentCountPerSection.length);
  console.log("Average # of Students/section: ", totalStudents/studentCountPerSection.length);
});
