import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const updateTaskToDB = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), {
        ...task
    })
}

export const addTaskToDB = async (task) => {
    await addDoc(collection(db, 'tasks'), {
        ...task
    })
}

export const deleteTaskFromDB = async (task) => {
    await deleteDoc(doc(db, 'tasks', task.id))
}

export const fetchTasksFromDB = (setTasksList) => {
    const queryCollection = query(collection(db, 'tasks'))
    const unsubscribe = onSnapshot(queryCollection, (querySnapshot) => {
        let tasksArr = []
        querySnapshot.forEach((doc) => {
            tasksArr.push({ ...doc.data(), id: doc.id })
        })
        setTasksList(tasksArr);
    });
    return unsubscribe;
}