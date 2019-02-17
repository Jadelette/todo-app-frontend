import axios from 'axios';

const TasksService = {
    async getActiveTasks() {
        let result = await axios.get("https://751kf1hfs1.execute-api.eu-west-2.amazonaws.com/dev/tasks/active");
        let data = await result.data;
        return data;
    },

    async getCompletedTasks() {
        let result = await axios.get("https://751kf1hfs1.execute-api.eu-west-2.amazonaws.com/dev/tasks/done");
        let data = await result.data;
        return data;
    },

    async saveTask(task) {
        let result = await axios.post("https://751kf1hfs1.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return result;
    },

    async deleteTask(taskId) {
        let result = await axios.delete("https://751kf1hfs1.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+taskId);
        return result;
    },

    async updateTask(taskId, newTaskDetails) {
        let result = await axios.put("https://751kf1hfs1.execute-api.eu-west-2.amazonaws.com/dev/tasks/"+taskId, newTaskDetails);
        return result;
    }
};

export default TasksService;