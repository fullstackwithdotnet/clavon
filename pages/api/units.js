import data from '../../data/dataBlockFloorData.json'

export default (req, res) => {
    res.status(200).json(data);
}