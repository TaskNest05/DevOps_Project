import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Conectar ao MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Modelo de Tarefa
const TaskSchema = new mongoose.Schema({
    title: String,
    category: { type: String, enum: ["Today", "Upcoming", "Completed"] },
    createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", TaskSchema);

// Criar uma tarefa
app.post("/tasks", async (req, res) => {
    const { title, category } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = new Task({ title, category });
    await newTask.save();
    res.json(newTask);
});

// Obter todas as tarefas
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Deletar uma tarefa
app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

// Criando a rota de login no backend
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Validação simples de exemplo
    if (email === "teste@hotmail.com" && password === "senha123456") {
        return res.json({ message: "Login successful", token: "your-jwt-token" });
    }

    res.status(400).json({ error: "Invalid credentials" });
});


// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
