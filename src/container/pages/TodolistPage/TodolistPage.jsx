import React, { useState } from 'react';
import "./TodolistPage.css";

function TodolistPage() {

    const [activity, setActivity] = useState("");
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState("");

    const generateId = () => Date.now();

    const saveTodoHandler = (event) => {
        event.preventDefault();

        if (!activity) {
            return setMessage("Nama Aktifitas Jangan Kosong!!!")
        }

        if (edit.id) {
            const updateNewTodo = {
                id: edit.id,
                activity,
                done: edit.activity === activity && edit.done ? true : false
            };

            const findEditIndexTodo = todos.findIndex(todo => todo.id === edit.id);
            const updatedTodos = [...todos];

            updatedTodos[findEditIndexTodo] = updateNewTodo;

            setTodos(updatedTodos);
            setMessage("");
            cancelEditHandler();

            return;
        }
        
        setTodos([...todos, {
            id: generateId(),
            activity,
            done: false
        }]);

        setMessage("");
        setActivity("");
    }

    const removeTodoHandler = (todoId) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoId);

        setTodos(filteredTodos);

        if (edit.id) {
            return cancelEditHandler();
        }

        setMessage("");
    }

    const editTodoHandler = (todo) => {
        setActivity(todo.activity);
        setEdit(todo);
        setMessage("");
    }

    const cancelEditHandler = () => {
        setEdit({});
        setActivity("");
        setMessage("");
    }

    const doneTodoHandler = (todo) => {
        const updateNewTodo = {
            ...todo,
            done: todo.done ? false : true
        };

        const findDoneIndexTodo = todos.findIndex(currentTodo => currentTodo.id === todo.id);
        const updatedTodos = [...todos];

        updatedTodos[findDoneIndexTodo] = updateNewTodo;

        setTodos(updatedTodos);
    }

    return (
        <>
            <h1>Simple TodoList</h1>
            {message ? (
                <div className="alert">{message}</div>
            ) : ""}
            <form action="" onSubmit={saveTodoHandler}>
                <input
                    type="text"
                    value={activity}
                    placeholder="Nama aktifitas"
                    onChange={(event) => setActivity(event.target.value)}
                />
                <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
                {edit.id ? (
                    <button onClick={cancelEditHandler}>Batal</button>
                ) : ""}
            </form>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    onChange={() => doneTodoHandler(todo)}
                                    checked={todo.done} />
                                {todo.activity} ({todo.done ? "Selesai" : "Belum Selesai"})
                                <button onClick={() => editTodoHandler(todo)}>Edit</button>
                                <button onClick={() => removeTodoHandler(todo.id)}>Hapus</button>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p><i>Tidak ada aktifitas</i></p>
            )}
        </>
    );
};

export default TodolistPage;
