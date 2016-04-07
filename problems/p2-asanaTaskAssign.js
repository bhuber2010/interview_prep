export function smartAssigning(information) {
    var people = [];
    information.forEach(function(p){
        if(p[1] == 1){
            p[2] = parseInt(p[2]);
            p[3] = parseInt(p[3]);
            people.push(p);
        }
    });

    if(people.length === 0) {
        return null
    }
    var assignedPerson = people[0][0];

    people.forEach(function(person){
        people.forEach(function(compPerson){
            if(person[0] != compPerson[0] || true){
              if(compPerson[3] <= person[3]){
                if(compPerson[3] < person[3]) {
                    assignedPerson = compPerson[0];
                } else if(compPerson[2] < person[2]) {
                    assignedPerson = compPerson[0];
                }
              }
            }
        })
    })
    // console.log(assignedPerson);
    return assignedPerson;
}

var information = [["John","1","2","6"], ["Martin","1","1","5"]];


console.log(smartAssigning(information));
