import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheck,
  faUndo,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingID, seteditingID] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [alltodos, setAllTodos] = useState([]);

  function handleAddTask() {
    if (task !== "") {
      const newTask = { id: Date.now(), task: task, completed: false, starred: false };
      setTodos((currentTodos) => [...currentTodos, newTask]);
      setAllTodos((currentTodos) => [...currentTodos, newTask]);
      setTask("");
    }
  }

  const getColor = (index) => {
    const colors = ["bg-red-100", "bg-green-100", "bg-blue-100", "bg-yellow-100", "bg-purple-100"];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white shadow-2xl p-6 relative"> {/* Added relative here */}
        <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">Your Day, Your Way</h1>
        <div className="flex items-center mb-5 relative"> {/* Added relative here */}
          {/* Filter Button */}
          <button
            onClick={() => setFilterOpen((currentStatus) => !currentStatus)}
            className="ml-3 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          {/* Submenu for filter */}
          {filterOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
              <button
                onClick={() => setTodos(alltodos)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                All Tasks
              </button>
              <button
                onClick={() => setTodos(alltodos.filter((todo) => todo.starred))}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Starred Tasks
              </button>
              <button
                onClick={() => setTodos(alltodos.filter((todo) => todo.completed))}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Completed Tasks
              </button>
            </div>
          )}

          {/* input field for task */}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ml-3"
            placeholder="Enter your task..."
          />
          <button
            onClick={handleAddTask}
            className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          <AnimatePresence>
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <motion.li
                  key={todo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  className={`flex items-center justify-between p-4 shadow-sm transition duration-300 ${getColor(index)} ${todo.completed ? "line-through" : ""}`}
                >
                  <div className="flex items-center">
                    {/* Star the task */}
                    <button
                      onClick={() => {
                        setTodos((currenttodosData) =>
                          currenttodosData.map((currentTodo) =>
                            currentTodo.id === todo.id
                              ? { ...currentTodo, starred: !currentTodo.starred }
                              : currentTodo
                          )
                        );
                      }}
                      className={`px-1 mr-2 ${todo.starred ? "bg-yellow-500" : "bg-gray-200"} `}
                    >
                      {todo.starred ? "★" : "☆"}
                    </button>
                    {/* edit the task */}
                    {editingID === todo.id ? (
                      <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="px-2 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <span className="text-lg text-gray-700 font-semibold italic tracking-wide hover:underline hover:text-purple-600 transition duration-300 ease-in-out">
                        {todo.task}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {editingID === todo.id ? (
                      <button
                        onClick={() => {
                          setTodos((currenttodosdata) =>
                            currenttodosdata.map((currentTodo) =>
                              currentTodo.id === editingID
                                ? { ...currentTodo, task: editedTask }
                                : currentTodo
                            )
                          );
                          seteditingID(null); // Exit edit mode
                          setEditedTask(""); // Clear the input
                        }}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            seteditingID(todo.id); // Enter edit mode
                            setEditedTask(todo.task); // Set the current task value
                          }}
                          className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        {/* mark completed to the task */}
                        <button
                          onClick={() => {
                            setTodos((currentodosdata) => {
                              return currentodosdata.map((currenttodo) =>
                                currenttodo.id === todo.id ? { ...currenttodo, completed: !currenttodo.completed } : currenttodo
                              );
                            });
                          }}
                          className={`px-2 py-1 ${todo.completed ? "bg-green-500" : "bg-gray-500"} text-white rounded-lg hover:bg-green-600 transition duration-300`}
                        >
                          <FontAwesomeIcon icon={todo.completed ? faUndo : faCheck} />
                        </button>
                        {/* delete the task */}
                        <button
                          onClick={() => {
                            setTodos((currenttodosdata) =>
                              currenttodosdata.filter((currenttodo) => currenttodo.id !== todo.id)
                            );
                          }}
                          className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </>
                    )}
                  </div>
                </motion.li>
              ))
            ) : (
              <p className="text-xl">No tasks available</p>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default App;
