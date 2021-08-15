import $ from "jquery";

export const writeNextTodo = (
  nextTodoText: string | number | string[] | undefined
) => {
  $("#nextTodo").text(`次のTODO: ${nextTodoText}`);
};

export const writeTodoCount = (count: number) => {
  $("#todoCount").text(`(全${count}件)`);
};

export const toggleTodoList = (count: number) => {
  if (count) {
    $("#todoList").show();
  } else {
    $("#todoList").hide();
  }
};

export const toggleTodoEmpty = (count: number) => {
  if (count) {
    $("#todoEmpty").hide();
  } else {
    $("#todoEmpty").show();
  }
};

// eslint-disable-next-line no-undef
export const removeTodo = ($element: JQuery<HTMLElement>) => {
  $element.closest(".todo").remove();
};

export const addTodo = () => {
  const wrapper = $("<div>");
  wrapper.addClass("todo");

  const input = $("<input>");
  input.attr("type", "text");

  const deleteButton = $("<button>");
  deleteButton.addClass("delete").text("削除");

  wrapper.append(input);
  wrapper.append(deleteButton);
  $("#todoList").append(wrapper);
};
