function multiSelection(dimensions, tasks, mouseCoordinates) {
    var width = dimensions[0];
    var height = dimensions[1];
    var yOffset = dimensions[2];

    var x1 = mouseCoordinates[0][0];
    var y1 = mouseCoordinates[0][1];
    var x2 = mouseCoordinates[1][0];
    var y2 = mouseCoordinates[1][1];

    var tasksObj = {};
    var listHeight = 0;

    tasks.forEach(function(curr, i){
        tasksObj[curr] = {
            name: curr,
            top: listHeight,
            bottom: listHeight + height
        };
        listHeight += i !== (tasks.length - 1) ? (height + 1) : 0;
    });

    var totalHeight = listHeight;
    var inRecY = 0 < x1 < width && 0 < x2 < width;
    var selectedTasks = [];
    var mouseTop = y1 <= y2 ? y1 : y2;
    var mouseBottom = y2 >= y1 ? y2 : y1;

    for(var t in tasksObj) {
        var task = tasksObj[t];
        console.log("Task top: " + task.top + " bottom: " + task.bottom);
        console.log("Mouse top: " + mouseTop + " bottom: " + mouseBottom);
        if(task.top <= mouseTop && mouseTop <= task.bottom){
            selectedTasks.push(task.name);
        } else if(mouseTop <= task.top && mouseBottom >= task.bottom){
            selectedTasks.push(task.name);
        } else if(task.top <= mouseBottom && mouseBottom <= task.bottom) {
            selectedTasks.push(task.name);
        }
    }

    return selectedTasks;
}

var testTaskList = ["Task 1", "Task 2", "Task 3", "Very Important Task", "Not So Important Task", "Yet Another Task", "The last task"];
var testMouseSelect = [[132, 42],[35, 13]];
var testDimensions = [135, 9, 1];

console.log(multiSelection(testDimensions, testTaskList, testMouseSelect));
