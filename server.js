const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Calcu = require("../API/schemas")


app.listen(3000, (err) => {
    if (!err) {
        console.log("Server connected successfully")
    }
})
app.use(express.json({ extended: false }))
mongoose.connect("mongodb://localhost/cal", () => {
    console.log("Connected Successfully")
}, (err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.status(200).send("Hello World !.")
})


app.post('/add', (req, res) => {
    Calcu.create({
        num1: req.body.num1,
        num2: req.body.num2,
        // sum: parseInt(req.body.num1) + parseInt(req.body.num2)
    }).then((sums) => {
        // const ans = sums.num1 + sums.num2
        // console.log(ans);
        // console.log(sums.num1,sums.num2)
        // if (sums.num1 === String(num1) || sums.num2 === String(num1)) {
        //     res.status(400).send("Invalid data types")
        //     console.log("Invalid data types")
        //     console.log("failure")
        // }

        if (sums.num1 > 1000000 || sums.num2 > 1000000) {
            res.status(400).send("overflow");
            console.log("Overflow")
            console.log("failure")
        }

        else {
            const ans = sums.num1 + sums.num2
            console.log(ans);
            res.status(200).send(`Success , The sum of given two numbers ${ans}`)
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.get('/add', (req, res) => {
    Calcu.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.post('/sub', (req, res) => {
    Calcu.create({
        num1: req.body.num1,
        num2: req.body.num2,
    }).then((sums) => {

        if (sums.num1 > 1000000 || sums.num2 > 1000000) {
            res.status(400).send("overflow");
            console.log("Overflow")
            console.log("failure")
        }

        else {
            const difference = sums.num1 - sums.num2
            console.log(difference);
            res.status(200).send(`Success , The sum of given two numbers ${difference}`)
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.get('/sub', (req, res) => {
    Calcu.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.post('/multiply', (req, res) => {
    Calcu.create({
        num1: req.body.num1,
        num2: req.body.num2,
    }).then((sums) => {

        if (sums.num1 > 1000000 || sums.num2 > 1000000) {
            res.status(400).send("overflow");
            console.log("Overflow")
            console.log("failure")
        }

        else {
            const result = sums.num1 * sums.num2
            console.log(result);
            res.status(200).send(`Success , The sum of given two numbers ${result}`)
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.get('/multiply', (req, res) => {
    Calcu.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})
app.post('/divide', (req, res) => {
    Calcu.create({
        num1: req.body.num1,
        num2: req.body.num2,
    }).then((sums) => {

        if (sums.num1 > 1000000 || sums.num2 > 1000000) {
            res.status(400).send("overflow");
            console.log("Overflow")
            console.log("failure")
        }

        if (sums.num2 === 0) {
            res.status(400).send("cannot divide by 0");
            console.log("cannot divide by 0")
            console.log("failure")
        }
        else {
            const result = sums.num1 / sums.num2
            console.log(result);
            res.status(200).send(`Success , The sum of given two numbers ${result}`)
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/divide', (req, res) => {
    Calcu.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})





// app.post("/add", (res, req) => {
//     Calcu.create({
//         num1: req.body.num1, num2: req.body.num2
//     })
//         .then((data) => {
//             if (data[0].num1 === String(num1) || data[0].num2 === String(num1)) {
//                 res.status(400).send("Invalid data types")
//                 console.log("Invalid data types")
//                 console.log("failure")
//             }
//             if (data[0].num1 > 100000 || data[0].num2 > 100000) {
//                 res.status(400).send("overflow");
//                 console.log("Overflow")
//                 console.log("failure")
//             }
//             else {
//                 const sum = data[0].num1 + data[0].num2;
//                 if (sum > 100000) {
//                     res.status(400).send("Underflow");
//                     console.log("failure")
//                 }
//                 else {
//                     res.status(200).send("Success");
//                     console.log("The sum of num1 and num2 is " + sum);
//                 }
//             }
//         })

// })

// app.post("/sub", (res, req) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;

//     if (num1 === String(num1) || num2 === String(num1)) {
//         res.status(400).send("Invalid data types")
//         console.log("Invalid data types")
//         console.log("failure")
//     }
//     if (num1 > 100000 || num2 > 100000) {
//         res.status(400).send("overflow");
//         console.log("Overflow")
//         console.log("failure")
//     }
//     else {
//         const difference = num1 - num2
//         res.status(200).send("Success");
//         console.log("The difference of num1 and num2 is " + difference);
//     }
// })

// app.post("/divide", (res, req) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;

//     if (num1 === String(num1) || num2 === String(num1)) {
//         res.status(400).send("Invalid data types");
//         console.log("Invalid data types")
//         console.log("failure")
//     }
//     else if (num1 > 100000 || num2 > 100000) {
//         res.status(400).send("overflow");
//         console.log("overflow")
//         console.log("failure")
//     }
//     else if (num2 === 0) {
//         res.status(400).send("cannot divide by 0");
//         console.log("cannot divide by 0")
//         console.log("failure")
//     }
//     else {
//         const divide = num1 / num2
//         res.status(200).send("Success");
//         console.log("The divide of num1 and num2 is " + divide);
//     }
// })

// app.post("/multiply", (res, req) => {
//     const num1 = req.body.num1;
//     const num2 = req.body.num2;

//     if (num1 === String(num1) || num2 === String(num1)) {
//         res.status(400).send("Invalid data types")
//         console.log("Invalid data types")
//         console.log("failure")
//     }
//     if (num1 > 100000 || num2 > 100000) {
//         res.status(400).send("overflow");
//         console.log("overflow")
//         console.log("failure")
//     }
//     else {
//         const result = num1 * num2
//         res.status(200).send("Success");
//         console.log("The result of num1 and num2 is " + result);
//     }
// })