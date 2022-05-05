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
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    if (!b) {
        return res.send({ result: "Error: div by 0" });
    }
    const result = a / b;
    await Operation.create({
        type: "DIV",
        args: {
            a: a,
            b: b,
        },
        result,
    });
    return res.send({ result });
});

router.get("/history", async function (req, res) {
    res.send(await Operation.findAll());
});

module.exports = router;
