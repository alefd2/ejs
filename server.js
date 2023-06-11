const express = require("express");

const app = express();

// ferramenta de render
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "JavaScript",
      message:
        "Linguagem de programação utilizada para desenvolvimento web e outras aplicações.",
    },
    {
      title: "HTML",
      message:
        "Linguagem de marcação utilizada para estruturar o conteúdo de páginas web.",
    },
    {
      title: "CSS",
      message:
        "Linguagem de estilização utilizada para definir a aparência das páginas web.",
    },
    {
      title: "Python",
      message:
        "Linguagem de programação versátil utilizada para diversos propósitos, incluindo desenvolvimento web, análise de dados e automação de tarefas.",
    },
  ];

  res.render("index", {
    techs: items,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(8081, () => {
  console.log("rodando");
});
