const express =  require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const questions = [
    {
        id: 1,
        question:'What is React?'
    },
    {
        id: 2,
        question:'What is Angular?'
    }
]
;
const answers = {
    1:[
        'React is a javasript library',
        'React is a library developed by facebook.'
    ],
    2:[
        'Angular is a javasript Framework',
        'Angular is a framework developed by google.'
    ]
}

const assets = {
    'cat': 'http://localhost:8080/images/cat.jpg',
    'cat1': 'http://localhost:8080/images/cat1.jpg'
}


app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => res.send('Sample Server'))

app.get('/questions', (req, res) => {
    res.send(questions).status(200);
});

app.get('/questions/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const question = { question: questions.filter((ques) => {
        return ques.id === id;
    }), answers: answers[id]}
    res.send(question).status(200);
});

app.get('/assets/:id', (req, res) => {
    const id = req.params.id;
    return res.send({url: assets[id]}).status(200);
})

app.listen(port, ()=> console.log(`Sample App listinging to port ${port}`));