let tasks = [];
let editingId = null;
function loadData() {
    const saved = localStorage.getItem() ;
    
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