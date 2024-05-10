// var sampleDate = new Date('2025-04-29');
// var sampleTaskText = 'study';

// Selecting Elements using getElementById
function createTaskElement(taskText, taskDate) {
  var highPriorityContainer = document.getElementById("highPriorityContainer");
  var lowPriorityContainer = document.getElementById("lowPriorityContainer");

  // Initialize a variable to currentdate
  var currentDate = new Date();

  // If sampleDate is before today, it is a high priority task
  // Else - it is a low priority task

  var newTaskElement = document.createElement("div");
  newTaskElement.innerHTML = taskText;

  if (taskDate <= currentDate) {
    highPriorityContainer.appendChild(newTaskElement);
  } else {
    lowPriorityContainer.appendChild(newTaskElement);
  }
}

var tasks = [
  { text: 'Study', date: new Date('2025-04-29') },
  { text: 'Eat', date: new Date('2020-04-29') },
  { text: 'sleep', date: new Date('2026-04-29') },

  // Add more tasks as needed
];

tasks.forEach(function (task) {
  createTaskElement(task.text, task.date);
});
