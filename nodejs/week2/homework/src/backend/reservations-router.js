const express = require("express");
const router = express.Router();

const reservations = require("./data/reservations");

router.get("/", async (_request, response) => {
  response.send(reservations);
});

// Filter meal according to ID
router.get("/:id", async (request, response) => {
  const id1 = parseInt(request.params.id);
  if (!id1) {
    response.status(400);
    response.send({ message: "Please enter valid id" });
    return;
  }
  const aReservation = reservations.find((reservation) => reservation.id === id1);
  if (aReservation === undefined) {
    response.status(400);
    response.send({ message: `There are no reservations with the id: ${id1}` });
    return;
  }
  response.send(aReservation);
});

module.exports = { router: router };
