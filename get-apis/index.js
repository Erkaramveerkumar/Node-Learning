import express from "express";

const app = express();
const port = 4600;

// home route
app.get("/", (request, response, next) => {
    response.send("<h1>Okey</h1>");

    // return response.status(200).json({
    //     message:"Ok"
    // });
});

// get user api
app.get("/users", (req, res) => {
    // console.log(req);
    const { name, grade, age } = req.query;

    // console.log(name, grade, age);

    let users = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "age": 20,
            "grade": "A",
            "courses": ["Math", "Physics", "Chemistry"]
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "age": 22,
            "grade": "B",
            "courses": ["Biology", "English", "History"]
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "age": 19,
            "grade": "A-",
            "courses": ["Computer Science", "Math", "Statistics"]
        },
        {
            "id": 4,
            "name": "Diana Lee",
            "age": 21,
            "grade": "B+",
            "courses": ["Economics", "Business", "Finance"]
        },
        {
            "id": 5,
            "name": "Ethan White",
            "age": 23,
            "grade": "C",
            "courses": ["Art", "Music", "Philosophy"]
        }
    ];

    if (name && grade && age) {
        users = users.find((user) => user.grade == grade && user.name == name && user.age == age);
    } else
        if (name && grade) {
            users = users.find((user) => user.grade == grade && user.name == name);
        } else if (name) {
            users = users.find((user) => user.name == name);
        } else if (grade) {
            users = users.find((user) => user.grade == grade);
        } else if (age) {
            users = users.find((user) => user.age == age);
        }

    return res.json({
        statusCode: 200,
        status: "success",
        message: "Students get successfully!",
        data: users || []
    });
});


app.get("/user/:id", (req, res) => {
    const id = req.params.id;

    const users = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "age": 20,
            "grade": "A",
            "courses": ["Math", "Physics", "Chemistry"]
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "age": 22,
            "grade": "B",
            "courses": ["Biology", "English", "History"]
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "age": 19,
            "grade": "A-",
            "courses": ["Computer Science", "Math", "Statistics"]
        },
        {
            "id": 4,
            "name": "Diana Lee",
            "age": 21,
            "grade": "B+",
            "courses": ["Economics", "Business", "Finance"]
        },
        {
            "id": 5,
            "name": "Ethan White",
            "age": 23,
            "grade": "C",
            "courses": ["Art", "Music", "Philosophy"]
        }
    ];

    // console.log("id", id)

    const user = users.find((user) => user.id == id);
    // console.log(user);
    if (!user) {
        return res.status(404).json({
            statusCode: 404,
            status: "error",
            message: `Student not Found with this is ${id}`
        });
    } else {
        return res.json({
            statusCode: 200,
            status: "success",
            message: "Student data get successfully!",
            data: user
        });
    }
})

app.listen(port, () => {
    console.log("Server is running on PORT:", port);
});