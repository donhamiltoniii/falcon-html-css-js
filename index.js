const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoContent = event.target[0].value;

  event.target[0].value = "";

  const newTodoItem = document.createElement("li");
  const todoElement = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  newTodoItem.classList.add("todo-list__list-item");

  todoElement.innerText = todoContent;
  todoElement.classList.add("todo-list__list-item-content");

  editButton.innerText = "Edit";
  editButton.classList.add("todo-list__edit-button");

  deleteButton.innerText = "Delete";
  deleteButton.classList.add("todo-list__delete-button");

  newTodoItem.append(todoElement, editButton, deleteButton);
  addContentEvent(todoElement);
  addEditButtonEvent(editButton);
  addDeleteButtonEvent(deleteButton);

  const todoList = document.querySelector(".todo-list__list");
  todoList.append(newTodoItem);
});

const editButtons = document.querySelectorAll(".todo-list__edit-button");

Array.from(editButtons).forEach(addEditButtonEvent);

function addEditButtonEvent(btn) {
  btn.addEventListener("click", (event) => {
    const selectedListItem = event.target.parentElement;

    const todoContent = selectedListItem.querySelector(
      ".todo-list__list-item-content"
    );
    const editButton = selectedListItem.querySelector(
      ".todo-list__edit-button"
    );
    const editInput = document.createElement("input");
    const saveButton = document.createElement("button");

    const todoText = todoContent.innerText;

    editInput.classList.add("todo-list__list-item-input");
    editInput.type = "text";
    editInput.value = todoText;

    saveButton.classList.add("todo-list__save-button");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", (event) => {
      const value = editInput.value;
      todoContent.innerText = value;

      selectedListItem.replaceChild(todoContent, editInput);
      selectedListItem.replaceChild(editButton, saveButton);
    });

    selectedListItem.replaceChild(editInput, todoContent);
    selectedListItem.replaceChild(saveButton, editButton);
  });
}

const deleteButtons = document.querySelectorAll(".todo-list__delete-button");

deleteButtons.forEach(addDeleteButtonEvent);

function addDeleteButtonEvent(btn) {
  btn.addEventListener("click", (event) => {
    const selectedListItem = event.target.parentElement;

    selectedListItem.remove();
  });
}

const todoContents = document.querySelectorAll(".todo-list__list-item-content");

todoContents.forEach(addContentEvent);

function addContentEvent(element) {
  element.addEventListener("click", (event) => {
    const content = event.target;

    content.classList.toggle("todo-list__list-item-content--complete");
  });
}
