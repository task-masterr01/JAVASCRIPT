let tasks = [];
let editingId = null;
function loadData() {
    tasks = [
        {
            id : 1 ,
            title : "eveluate the adddition and deletion of task",
            status : "pending" ,
            priority : "critical" ,
            completed : false,

        },
        {
            id : 2,
            title : "identify the implementation team",
            status : "progress" ,
            priority : "minor" ,
            completed : false,
        },
        {
            id : 3,
            title : "batch schedule download/progress",
            status : "pending" ,
            priority : "critical" ,
            completed : false,
        },
        {
            id : 4,
            title : "monitor system performance and adjust hardware",
            status : "pending" ,
            priority : "minor" ,
            completed : false,
        }
    ];
    updateGreeting();
    renderTasks();   
}
function updateGreeting() {
    const hours = new Date().getHours() ;
    let greet = "Good Morning" ;

    if ( hours >= 12 && hours < 18  ) greet = "Good Afternoon " 
    else if ( hours >= 18 &&  hours < 20 ) greet = "Good Evening  " 
    else greet = "Good Night" 
    document.getElementById("greeting").textContent = `${greet} , Sweet Heart !` ;
}

function saveData () {
    
}





const taskCard = `
    <div class="task-item">
                    <div class="task-checkbox " onclick="toggleTask()"></div>
                    <div class="task-content">
                        <div class="task-title " >Cooking something</div>
                    </div>
                    <span class="status-badge status-pending"></span>
                    <div class="priority-badge priority-something">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                    </div>
                    <div class="avatar">CF</div>
                    <button class="icon-btn" style="width: 30px; height: 30px;" onclick="editTask()">
                        <i class="ri-pencil-fill" style="font-size: 12px;"></i>
                    </button>
                    <button class="icon-btn" style="width: 30px; height: 30px;" onclick="deleteTask()">
                        <i class="ri-delete-bin-fill" style="font-size: 12px;"></i>
                    </button>
                </div>
`