import data from '../../data/transactions.json'

export default (req, res) => {
    res.status(200).json(data);
}