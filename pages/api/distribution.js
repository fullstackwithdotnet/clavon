import data from '../../data/unitsDistribution.json'

export default (req, res) => {
    res.status(200).json(data);
}