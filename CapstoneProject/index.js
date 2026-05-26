import express from "express";
import bodyParser from "body-parser";

const posts = [
  {
    id: 1,
    title: "Why I Like Difficult Problems",
    date: "May 2026",
    excerpt:
      "Hard problems force clarity, discipline, and deeper understanding.",

    content:
      "Difficult problems reveal the gaps in our thinking. They demand patience, experimentation, and the ability to stay calm under uncertainty."
  },

  {
    id: 2,
    title: "Building Systems Instead of Goals",
    date: "May 2026",
    excerpt:
      "Systems compound quietly while goals disappear once achieved.",

    content:
      "Goals create direction, but systems create consistency. The people who improve continuously usually focus more on process than outcomes."
  },

  {
    id: 3,
    title: "The Value of Reckless Solving",
    date: "May 2026",
    excerpt:
      "Speed and experimentation often teach more than overthinking.",

    content:
      "Solving large volumes of problems builds intuition. Waiting for perfect understanding before attempting questions usually slows learning."
  },

  {
    id: 4,
    title: "Engineering and Ambition",
    date: "May 2026",
    excerpt:
      "Engineering rewards people who combine curiosity with persistence.",

    content:
      "Technical skill compounds over years. Deep understanding is usually built through repeated exposure to difficult ideas and projects."
  },

  {
    id: 5,
    title: "Learning Faster Than Everyone Else",
    date: "May 2026",
    excerpt:
      "Fast learners are usually just better at feedback loops.",

    content:
      "People who improve quickly tend to iterate more, fail more often, and reflect more deeply on mistakes instead of avoiding them."
  },

  {
    id: 6,
    title: "The Quiet Power of Consistency",
    date: "May 2026",
    excerpt:
      "Small daily effort compounds more than rare motivation bursts.",

    content:
      "Most meaningful progress is invisible in the short term. Consistency matters because it allows compounding to work over long periods."
  },

  {
    id: 7,
    title: "What College Actually Teaches",
    date: "May 2026",
    excerpt:
      "The biggest lessons in college are often outside the classroom.",

    content:
      "College teaches independence, adaptability, collaboration, and how to learn without constant supervision. The technical curriculum is only part of the experience."
  }
];


const app=express();
const port=3000;

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res)=>{
    res.render("index.ejs", {posts : posts});
});

app.get("/posts/:id", (req, res) => {

    const postQueried = req.params.id;

    let foundPost;

    for (let i = 0; i < posts.length; i++) {

        if (posts[i].id == postQueried) {
            foundPost = posts[i];
        }

    }

    res.render("post.ejs", {
        post: foundPost
    });

});