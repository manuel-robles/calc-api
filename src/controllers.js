const express = require("express");
const router = express.Router();

const { Operation } = require("./models.js");

router.get("/add/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a + b;

    await Operation.create({
        type: "ADD",
        args: {
            a: a,
            b: b,
        },
        result,
    });

    return res.send({ result });
});

/*Función resta*/
router.get("/res/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a - b;

    await Operation.create({
        type: "RES",
        args: {
            a: a,
            b: b,
        },
        result,
    });

    return res.send({ result });
});

router.get("/mul/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a * b;

    await Operation.create({
        type: "MUL",
        args: {
            a: a,
            b: b,
        },
        result,
    });

    return res.send({ result });
});

router.get("/div/:a/:b", async function (req, res) {
<<<<<<< HEAD
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a / b;


=======
>>>>>>> 4cd5477c90206b1c66ae4f73e5d3ce0d8891e81b
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    if (!b) {
        return res.send({ result: "Error: div by 0" });
    }
    const result = a / b;
<<<<<<< HEAD

=======
>>>>>>> 4cd5477c90206b1c66ae4f73e5d3ce0d8891e81b
    await Operation.create({
        type: "DIV",
        args: {
            a: a,
            b: b,
        },
        result,
    });
<<<<<<< HEAD

=======
>>>>>>> 4cd5477c90206b1c66ae4f73e5d3ce0d8891e81b
    return res.send({ result });
});

router.get("/history", async function (req, res) {
    res.send(await Operation.findAll());
});

module.exports = router;
