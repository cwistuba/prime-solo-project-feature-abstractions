const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText =
    'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// --------------------------------------------------------
//  create GET for all courses
router.get("/courses", (req, res) => {
  const queryText = `SELECT "id", "name", "address", "city", "state", "zip", "latitude", "longitude" FROM "courses_list" ORDER BY "id";`;

  pool
    .query(queryText)

    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// ------------------------------------------------------------
// GET for user save Courses
router.get("/usercourses", (req, res) => {
  const userId = req.user.id;
  console.log("userID", userId);
  const queryText = `SELECT "user_course".id, "courses_list".name, "courses_list".address, "courses_list".city, "courses_list".state, "courses_list".zip, "courses_list".latitude, "courses_list".longitude FROM "user_course"
  JOIN "user" ON "user".id = "user_course".user_id
  JOIN "courses_list" ON "courses_list".id = "user_course".courses_list_id 
  WHERE "user_course".user_id = $1;`;

  pool
    .query(queryText, [userId])

    .then((responseDb) => {
      console.log(responseDb.rows);
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// -----------------------------------------------------------
//  POST for user saved Courses
router.post("/usercourses/:id", (req, res) => {
  const newCourse = req.body;
  const queryText = `INSERT INTO user_course (user_id, courses_list_id)
  VALUES ($1, $2)`;

  pool
    .query(queryText, [newCourse.user_id, newCourse.courses_list_id])

    .then((result) => {
      console.log(`Added course to the database`, newCourse);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// -----------------------------------------------------------
//  DELETE for user saved Courses

router.delete("/:id", (req, res) => {
  const queryText = `DELETE FROM "user_course" WHERE "user_course".id=$1;`;
  const userCourseId = req.params.id;

  pool
    .query(queryText, [userCourseId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error deleting course", error);
      res.sendStatus(500);
    });
});

module.exports = router;
