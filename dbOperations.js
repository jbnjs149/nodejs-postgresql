
var config = require("./config.js");

module.exports = {
    pgConf: {
        host: 'localhost',
        port: '5432',
        username: 'postgres',
        password: 'root',
        db: 'test'
    },
    getDbInstance: function () {
        var pg = require('pg');
        var conString = `postgres://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`;
        return new pg.Client(conString);
    },
    getTaskList: async function (req, res) {
        var client = this.getDbInstance();
        await client.connect();
        var result = await client.query("select * from todo_list");
        client.end();
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(result.rows, null, 3));
        res.end();
    },
    addNewTask: async function (req, res) {
        var client = this.getDbInstance();
        await client.connect();
        var qry = `insert into todo_list (task,status,assignee) values ('${req.body.task}','open','${req.body.assignee}')`;
        var result = await client.query(qry);
        client.end();
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        var resp = {
            'status': 'success',
            'message': 'Successfully added the task'
        };
        res.write(JSON.stringify(resp, null, 3));
        res.end();
    },

    deleteTask: async function (req, res) {
        var client = this.getDbInstance();
        await client.connect();
        var qry = `Delete from todo_list Where task_id = ${req.params.task_id}`;
        var result = await client.query(qry);
        client.end();
        var resp = {
            'status': 'success',
            'message': 'Successfully deleted the task'
        };
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(resp, null, 3));
        res.end();
    },

    updateTaskTitle: async function (req, res) {
        var client = this.getDbInstance();
        await client.connect();
        var qry = `UPDATE task_list SET task = ${req.body.task} WHERE task_id ${req.body.task_id}`;
        var result = await client.query(qry);
        client.end();
        var resp = {
            'status': 'success',
            'message': 'Successfully updated the task title'
        };
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(resp, null, 3));
        res.end();
    },

    updateTaskStatus: async function (req, res) {
        var client = this.getDbInstance();
        await client.connect();
        var qry = `UPDATE task_list SET status = ${req.body.status} WHERE task_id ${req.body.task_id}`;
        var result = await client.query(qry);
        client.end();
        var resp = {
            'status': 'success',
            'message': 'Successfully updated the task status'
        };
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(resp, null, 3));
        res.end();
    },

};