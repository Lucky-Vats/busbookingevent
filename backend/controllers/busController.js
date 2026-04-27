const { buses } = require("../data/mockData");

const getBuses = async (req, res) => {
  const { source, destination, date } = req.query;
  let results = buses;

  if (source) {
    const sourceQuery = source.toLowerCase();
    results = results.filter((bus) =>
      bus.source.toLowerCase().includes(sourceQuery) ||
      bus.destination.toLowerCase().includes(sourceQuery) ||
      bus.busName.toLowerCase().includes(sourceQuery) ||
      bus.busNumber.toLowerCase().includes(sourceQuery)
    );
  }

  if (destination) {
    const destinationQuery = destination.toLowerCase();
    results = results.filter((bus) =>
      bus.source.toLowerCase().includes(destinationQuery) ||
      bus.destination.toLowerCase().includes(destinationQuery) ||
      bus.busName.toLowerCase().includes(destinationQuery) ||
      bus.busNumber.toLowerCase().includes(destinationQuery)
    );
  }

  return res.status(200).json({
    message: date ? `Bus results for ${date}` : "Bus results",
    buses: results
  });
};

module.exports = { getBuses };
