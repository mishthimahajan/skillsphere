
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const passport = require("./config/passport");

const authRoutes = require("./routes/authRoutes");
const gigRoutes = require("./routes/gigRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const Chat = require("./models/FreelancerChat");

const session = require("express-session");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => {
    console.log("Mongo Error ❌", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("SkillSphere API Running 🚀");
});
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api", gigRoutes);
app.use("/api/applicants", applicantRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin",adminRoutes);


connectDB();


const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log("Joined room:", room);
  });

  
  socket.on("send_message", (data) => {
    console.log("Message:", data);

    
    io.in(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running 🚀 on ${PORT}`);
});