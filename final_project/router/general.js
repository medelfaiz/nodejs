const { json } = require('express');
const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const { getBookByisbn, getBookByauthor, getBookBytitle } = require('../services/booksService')
const public_users = express.Router();



public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  //Write your code here
  return res.status(300).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  //Write your code here

  const { isbn } = req.params
  try {
    const book = getBookByisbn({ isbn, books })
    return res.status(300).json(book);
  } catch (error) {
    return res.status(error.code).json(error)
  }
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  //Write your code here
  const { author } = req.params
  try {
    const book = getBookByauthor({ author, books })
    return res.status(300).json(book);
  } catch (error) {
    return res.status(error.code).json(error)
  }
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  //Write your code here

  const { title } = req.params
  try {
    const book = getBookBytitle({ title, books })
    return res.status(300).json(book);
  } catch (error) {
    return res.status(error.code).json(error)
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
