const div = document.querySelector(".users");
const usersInfo = document.querySelector(".users-info");

const getRepos = (user) =>
  fetch(`https://api.github.com/search/repositories?q=user:${user}`)
    .then((response) => response.json())
    .then((data) => ({ data, user }));

const step = ({ data: { items }, user }) => {
  const lis = items.map(({ name, html_url }) => {
    const li = document.createElement("li");
    li.innerHTML = `-  ${name}: ${html_url}`;
    return li;
  });
  const ul = document.createElement("ul");
  lis.forEach((li) => ul.appendChild(li));

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("links");
  a.innerHTML = user;
  a.href = `https://github.com/${user}?tab=repositories`;
  li.appendChild(a);
  li.appendChild(ul);
  return li;
};

const main = async (users) => {
  const ps = users.map((user) => getRepos(user));
  const data = await Promise.all(ps);
  console.log({ data });
  data.map(step).forEach((li) => usersInfo.appendChild(li));
};

const users = ["benna100", "valmdz", "arya56", "ember-b-Moss", "kamalrsa"];
main(users);
