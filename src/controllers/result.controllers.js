import Result from "../models/results.model.js"

const postResult = async (req, res) => {
    try {
        const {
            home,
            away,
            stadium,
            homeGoals,
            awayGoals,
            tournament,
            date,
            hour,
            status
        } = req.body;

        console.log(req.body)
        if(!home || !away || !stadium || homeGoals != "" || awayGoals != "" || !tournament ||
            !date || !hour || !status
            ) {
                return res.status(400).send({
                    message: "Por favor preencha todos os campos"
                });
        }

        const result = await Result.create(req.body);
        
        res.status(201).send({
            message: "Placar registrado com sucesso",
            result
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
} 

const getAllResults = async (req, res) => {
    try {
        const result = await Result.find().exec();
        res.status(200).send({
            message: "Placares registrados",
            result
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
} 

const getByDate = async (req, res) =>  {
    try {
        const now = new Date().toLocaleDateString();
        const itens = await Result.find();

        const matchItens = itens.filter( (item) => {
            return item.date.toLocaleDateString() == now;
        })

        res.status(200).send(matchItens);
        
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

export default {
    postResult,
    getAllResults,
    getByDate
}