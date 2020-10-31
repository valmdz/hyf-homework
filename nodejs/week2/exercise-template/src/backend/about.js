const express = require("express");
const router = express.Router();

const bisect = (a, b) => {
  const c = Math.floor(a + (b - a) / 2)
  if(c === a) return [];
  return [c, bisect(a, c), bisect(c, b)];
};

const toList = (x) => {
  if(x.length === 0) return [];
  const [a, l, r] = x;
  return [a].concat(toList(l)).concat(toList(r));
};

router.get("/", async (_request, response) => {
  response.send("about");
});

router.get("/company", async (_request, response) => {
  response.send("The company bla bla and does xxx in favor of xxx");
});

router.get("/employers", async (request, response) => {
  if(request.query.skills === 'tech'){
    response.send('Employers with tech skills')
  };
  response.send("Employers");
});

router.get("/employers/:name", async (request, response) => {
  console.log(request.params);
  response.send(`Employers with name ${request.params.name}`);
});

router.get("/bisect", async (_request, response) => {
  response.send(bisect(0, 20));
});
router.get("/bisect/toList", async (_request, response) => {
  response.send(toList(bisect(0, 20)));
});

module.exports = router;