export const user = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    password: "huhiushidshjsncbchsvhcjvg",
  },
  {
    id: "2",
    name: "Anil",
    email: "anil@example.com",
    password: "huhiushidshjsncbchsvhcjvg",
  },
  {
    id: "3",
    name: "Jumanji",
    email: "jumanji@example.com",
    password: "huhiushidshjsncbchsvhcjvg",
  },
  {
    id: "4",
    name: "Muma",
    email: "muma@example.com",
    password: "huhiushidshjsncbchsvhcjvg",
  },
  {
    id: "5",
    name: "Revati",
    email: "revati@example.com",
    password: "huhiushidshjsncbchsvhcjvg",
  },
];

// db.js
import mongoose from "mongoose";

const url = process.env.MONGOOSE_URL;

const DBConnection = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default DBConnection;
