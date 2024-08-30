import { API_URL } from "./constanst";


export const postTask = async ({ title, description, isCompleted }) => {
    return fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ title, description, isCompleted }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
}

export const getAllTasks = async () => {
    return fetch(API_URL).then((response) => response.json());
};

export const updateTask = (id, {title, description, isCompleted}) => {
    return fetch(API_URL + `/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            isCompleted,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const deleteTask = (id) => {
    return fetch(API_URL + `/${id}`, {
        method: "DELETE",
    });
};