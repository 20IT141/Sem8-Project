const express = require("express");
const otpGenerator = require("otp-generator");
const twilio = require("twilio");
const app = express();
const con = require("./config");
const router = require("router");
const saltRounds = 10;
const path = require("path");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkToken } = require("./verify");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 4500;
const bcrypt = require("bcrypt");
const http = require("http");
const multer = require("multer");
const fs = require('fs')

//Multer Code
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

//User SignUp
app.post("/signUp", (req, resp) => {
  const data = [
    {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phone_num: req.body.phone_num,
      password: req.body.password,
      c_password: req.body.c_password,
    },
  ];
  if (req.body.password == req.body.c_password) {
    con.query("INSERT INTO signup SET ?", data, (error, result) => {
      if (error) {
        return resp.json({
          success: 0,
          message:
            "Registration not successfull Please Enter the right details.",
        });
      } else {
        return resp.json({
          success: 1,
          message: "Registration successful !",
          data: result,
          details: data,
        });
      }
    });
  } else {
    return resp.json({
      success: 0,
      message: "Please Enter the password & c_password are same",
    });
  }
});

//User LogIN
app.post("/login", async (req, resp) => {
  let email = req.body.email;
  con.query("select * from signup WHERE email = ? ", email, (err, results) => {
    if (err) {
      resp.send(err);
    }
    if (results && results.length > 0) {
      if (req.body.password == results[0].password) {
        const jsontoken = sign({ result: results }, "Safik123", {
          expiresIn: "2h",
        });
        return resp.json({
          success: 1,
          message: "Login success",
          token: jsontoken,
          details: results[0],
        });
      } else {
        return resp.json({
          success: 0,
          data: "Invalid Email or Password Combination",
        });
      }
    } else {
      return resp.json({
        success: 0,
        data: "Email Id Not Found",
      });
    }
  });
});

//Post Event
app.use("/profile", express.static("upload/images"));
app.post("/event", upload.single("profile"), (req, res) => {
  const data = [
    {
      category_name: req.body.category_name,
      title: req.body.title,
      s_date: req.body.s_date,
      e_date: req.body.e_date,
      time: req.body.time,
      location: req.body.location,
      description: req.body.description,
      image: `http://localhost:4500/profile/${req.file.filename}`,
    },
  ];
  con.query("INSERT INTO event SET ?", data, (error, result, fields) => {
    res.json({
      success: 1,
      image: `http://localhost:4500/profile/${req.file.filename}`,
      message: "Data Posted Successfully",
    });
  });
});

//Get All Events
app.get("/events", (req, res) => {
  con.query("SELECT * FROM event ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "Events Details",
        details: result,
      });
    }
  });
});

//Get Events By ID
app.get("/events/:id", (req, res) => {
  con.query(
    "SELECT * FROM event WHERE id = ? ",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          message: "Event data",
          details: result,
        });
      }
    }
  );
});

//Post Category
app.use("/category", express.static("upload/images"));
app.post("/category", upload.single("category"), (req, res) => {
  const data = [
    {
      category_name: req.body.category_name,
      image: `http://localhost:4500/category/${req.file.filename}`,
      url: req.body.url,
    },
  ];
  con.query("INSERT INTO category SET ?", data, (error, result, fields) => {
    res.json({
      success: 1,
      image: `http://localhost:4500/category/${req.file.filename}`,
      message: "Data Posted Successfully",
    });
  });
});

//Get All Category
app.get("/categories", (req, res) => {
  con.query("SELECT * FROM category ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "All Category",
        data: result,
      });
    }
  });
});

//Get Category By ID
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  con.query("SELECT * FROM category WHERE id = ? ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "Category Detail.",
        data: result,
      });
    }
  });
});

//Post Category_ID & Event_ID
app.post("/eventcat", (req, res) => {
  const data = [
    {
      event_id: req.body.event_id,
      category_id: req.body.category_id,
    },
  ];
  con.query("INSERT INTO catevent SET ? ", data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "Event_ID & Category_ID Inserted SuccesssFully.",
      });
    }
  });
});

//Post Category ID & Get Event_ID
app.post("/cat", (req, res) => {
  const category_id = req.body.category_id;
  con.query(
    "SELECT * FROM catevent WHERE category_id	 = ? ",
    category_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          message: "Category Wise Event.",
          data: result,
        });
      }
    }
  );
});

//EventDetails By Category
app.post("/eventbycategory", (req, res) => {
  const category_name = req.body.category_name;
  con.query(
    "SELECT * FROM event WHERE category_name = ? ",
    category_name,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          message: "Cards By Category",
          data: result,
        });
      }
    }
  );
});

//User Data Get
app.get("/userData/:id", (req, res) => {
  let id = req.params.id;
  con.query("SELECT * FROM signup WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "User data",
        details: result,
      });
    }
  });
});

//User Data Update
app.patch("/update/:id", (req, resp) => {
  let putid = req.params.id;
  const data = [
    req.body.name,
    req.body.email,
    req.body.gender,
    req.body.phone_num,
    putid,
  ];
  con.query(
    "UPDATE  signup SET name = ? , email = ?,gender=? ,phone_num = ? WHERE id =?",
    data,
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return resp.json({
          success: 1,
          message: "UserData was Updated",
        });
      }
    }
  );
});


//User ChangePassword
app.post("/changepassword", async (req, res) => {
  let password = req.body.password;
  let new_password = req.body.new_password;
  let confrim_password = req.body.confrim_password;

  let data = [
    {
      old_password: req.body.password,
      new_password: req.body.new_password,
      confrim_password: req.body.confrim_password,
      id: req.params.id,
    },
  ];
  con.query(
    "SELECT * FROM signup WHERE password = ?",
    password,
    (err, result) => {
      if (err);
      if (result && result.length > 0) {
        if (req.body.password == result[0].password) {
          if (password == new_password || password == confrim_password) {
            return res.json({
              success: 0,
              message: "Please Enter Passwor You have not used Before.",
            });
          } else {
            if (new_password == confrim_password) {
              con.query(
                "INSERT INTO changepassword SET ? ",
                data,
                (err, results) => {
                  if (err) {
                    console.log(err);
                  } else {
                    if (results == null) {
                      console.log("password was not updated");
                    } else {
                      con.query(
                        "UPDATE signup  SET password = ? , c_password = ? WHERE password = ? ",
                        [new_password, confrim_password, password],
                        (err, reslt) => {
                          if (err) {
                            console.log(err);
                          }
                        }
                      );
                    }
                    return res.json({
                      success: 1,
                      message: "Password Changed Successfully",
                    });
                  }
                }
              );
            } else {
              return res.json({
                success: 0,
                message:
                  "Please Enter the New_Password & Confrim_Password Same ",
              });
            }
          }
        }
      } else {
        res.json({
          success: 0,
          message: "Please Enter the Correct Password.",
        });
      }
    }
  );
});

//Book Event
app.post("/user", (req, resp) => {
  const data = [
    {
      user_id: req.body.user_id,
      event_id: req.body.event_id,
    },
  ];
  con.query("INSERT INTO userevent SET ?", data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return resp.json({
        success: 1,
        message: "Data Inserted Succesfully",
      });
    }
  });
});

//Get Booked Event Details By ID
app.post("/userevent", (req, res) => {
  let user_id = req.body.user_id;
  con.query(
    "SELECT * FROM userevent WHERE user_id = ?",
    user_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          message: "User data",
          details: result,
        });
      }
    }
  );
});

//User Contact Data Post
app.post("/contactus", async (req, res) => {
  let data = [
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      fon_number: req.body.fon_number,
      description: req.body.description,
    },
  ];
  con.query("INSERT INTO events SET ? ", data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 0,
        message: "Successfully Inserted Contact Details.",
        details: data,
        
      });
    }
  });
});

//Event Delete
app.delete("/eventDelete/:id", async (req, res) => {
  let id = req.params.id;
  con.query("DELETE FROM event WHERE id= ?  ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        success: 1,
        message: "EventData was successfully deleted.",
      });
    }
  });
});

//UserDelete
app.delete("/deleteUser/:id", async (req, res) => {
  let id = req.params.id;
  con.query("DELETE FROM signup WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        success: 1,
        message: "UserData was delete Successfully",
      });
    }
  });
});

//Admin SignUP
app.post("/adminsignup", (req, resp) => {
  const data = [
    {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phone_num: req.body.phone_num,
      password: req.body.password,
      c_password: req.body.c_password,
    },
  ];
  if (req.body.password == req.body.c_password) {
    con.query("INSERT INTO admin SET ?", data, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return resp.json({
          success: 1,
          message: "Admin Registration successful !",
          data: result,
          details: data,
        });
      }
    });
  } else {
    return resp.json({
      success: 0,
      message: "Please Enter the password & c_password are same",
    });
  }
});

//Admin Login
app.post("/adminlogin", async (req, resp) => {
  let email = req.body.email;
  con.query("select * from admin WHERE email = ? ", email, (err, results) => {
    if (err) {
      resp.send(err);
    }
    if (results && results.length > 0) {
      if (req.body.password == results[0].password) {
        const jsontoken = sign({ result: results }, "Safik123", {
          expiresIn: "2h",
        });
        return resp.json({
          success: 1,
          message: "Login success",
          token: jsontoken,
          details: results[0],
        });
      } else {
        return resp.json({
          success: 0,
          data: "Invalid Email or Password Combination",
        });
      }
    } else {
      return resp.json({
        success: 0,
        data: "Email Id Not Found",
      });
    }
  });
});

//UserInfo Get
app.get("/userlogininfo", (req, res) => {
  con.query("SELECT * FROM signup", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "User LogIn Information.",
        data: result,
      });
    }
  });
});

//User INFO By ID
app.get("/userlogininfo/:id", (req, res) => {
  const id = req.params.id;
  con.query("SELECT * FROM signup WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({
        success: 1,
        message: "User LogIn Information.",
        data: result,
      });
    }
  });
});

//Get UserID by EventID
app.post("/eventuser", (req, res) => {
  const event_id = req.body.event_id;
  con.query(
    "SELECT * FROM userevent WHERE event_id = ? ",
    event_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          success: 1,
          success: "Event Data By User.",
          data: result,
        });
      }
    }
  );
});

app.post("/generate-otp-and-send-sms", async (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  // Generate a 6-digit OTP
  const otp = otpGenerator.generate(6);

  // Send the OTP to the user's phone number
  await twilio.messages.create({
    to: phoneNumber,
    from: "+15555555555",
    body: `Your OTP is ${otp}`,
  });

  // Return a success response
  res.json({
    success: true,
  });
});

//Update

app.patch("/upda/:id", (req, resp) => {
  let putid = req.params.id;
  const data = [
    req.body.name,
    req.body.email,
    req.body.gender,
    req.body.phone_num,
    putid,
  ];
  con.query(
    "update signup set name  =  ? , email =? , gender =  ?,phone_num =? where id =?",
    data,
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return resp.json({
          success: 1,
          message: "UserData was Updated",
          userData: data,
        });
      }
    }
  );
});

//Function Error Handler
function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}

app.use(errHandler);

//Port Listener
app.listen(port, (req, res) => {
  console.log(`Port is running on ${port}`);
});
