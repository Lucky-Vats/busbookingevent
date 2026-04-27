const Booking = require("../models/Booking");
const { buses } = require("../data/mockData");

const generatePnr = () => String(Date.now()).slice(-10);

const createBooking = async (req, res) => {
  try {
    const { busId, journeyDate, passenger, userId } = req.body;

    if (!busId || !journeyDate || !passenger?.name || !passenger?.seat || !userId) {
      return res.status(400).json({ message: "Incomplete booking details." });
    }

    const bus = buses.find((item) => item.id === busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found." });
    }

    const booking = await Booking.create({
      userId,
      busId: bus.id,
      busName: bus.busName,
      source: bus.source,
      destination: bus.destination,
      journeyDate,
      price: bus.price,
      passenger,
      pnr: generatePnr()
    });

    return res.status(201).json({ message: "Booking confirmed.", booking });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create booking.", error: error.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const { userId } = req.query;
    const query = userId ? { userId } : {};
    const bookings = await Booking.find(query).sort({ createdAt: -1 });

    return res.status(200).json({ bookings });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch bookings.", error: error.message });
  }
};

module.exports = { createBooking, getBookings };
