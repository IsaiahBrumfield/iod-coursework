const express = require("express");
const app = express();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const dbConnect = require('./dbConnect');

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);
app.use("/api/comment", commentRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});