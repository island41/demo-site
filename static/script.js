document.addEventListener('DOMContentLoaded', function() {
    // 球動畫
    const ball = document.querySelector('.ball');
    if (ball) {
        ball.classList.add('animate');
    }

    // 待辦事項表單提交處理
    const todoForm = document.getElementById('todo-form');
    if (todoForm) {
        todoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 防止表單提交刷新頁面
            const newTaskInput = document.getElementById('new-task');
            const taskList = document.getElementById('task-list');
        
            if (newTaskInput.value.trim() !== '') {
                const listItem = document.createElement('li');
        
                // 創建勾選欄和任務文本
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        listItem.classList.add('completed');
                    } else {
                        listItem.classList.remove('completed');
                    }
                });
        
                const taskText = document.createElement('span');
                taskText.textContent = newTaskInput.value;
        
                // 添加勾選欄和任務文本到列表項目
                listItem.appendChild(checkbox);
                listItem.appendChild(taskText);
                taskList.appendChild(listItem);
        
                newTaskInput.value = ''; // 清空輸入框
            }
        });
    }
});
