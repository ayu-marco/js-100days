// ==== 要素取得 ====
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// ==== ユーティリティ ====
function isEnterKey(e) {
    return e.key === "Enter" && !e.isComposing;
}

// ==== ToDo生成 ====
function createTodoElement(text){
    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", () => {
    li.classList.toggle("done");

    if (li.classList.contains("done")){
        todoList.appendChild(li);
    }else{
        todoList.prepend(li);
    }
});

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    return li;
}

// ==== 追加処理 ====
function addTodo(){
    if (todoInput.value.trim() === "") return;

    const todoItem = createTodoElement(todoInput.value);
    todoList.appendChild(todoItem);

    todoInput.value = "";
    todoInput.focus();
}


// ==== イベント登録 ====
todoInput.addEventListener("keydown", (e) => {
    if (isEnterKey(e)) {
        addTodo();
    }
});

addBtn.addEventListener("click", () => {
    addTodo();
});

