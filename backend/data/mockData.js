const trains = [
  {
    id: "TR1001",
    busNumber: "B12951",
    busName: "Volvo AC Sleeper",
    source: "Mumbai",
    destination: "Delhi",
    departure: "06:00",
    arrival: "20:30",
    duration: "14h 30m",
    availability: "Available 42",
    price: 1899
  },
  {
    id: "TR1002",
    busNumber: "B12009",
    busName: "RedBus Express",
    source: "New Delhi",
    destination: "Chandigarh",
    departure: "07:40",
    arrival: "11:05",
    duration: "3h 25m",
    availability: "RAC 18",
    price: 899
  },
  {
    id: "TR1003",
    busNumber: "B12627",
    busName: "Karnataka AC Bus",
    source: "Bengaluru",
    destination: "Delhi",
    departure: "19:20",
    arrival: "10:15",
    duration: "14h 55m",
    availability: "WL 11",
    price: 1540
  },
  {
    id: "TR1004",
    busNumber: "B12301",
    busName: "Howrah Deluxe Bus",
    source: "Kolkata",
    destination: "Delhi",
    departure: "16:55",
    arrival: "09:50",
    duration: "16h 55m",
    availability: "Available 19",
    price: 2100
  }
];

const pnrStatuses = ["Confirmed", "RAC", "Waiting"];

const foodItems = [
  { id: "FD1", name: "Veg Thali", price: 180, category: "Meal", eta: "25 min" },
  { id: "FD2", name: "Paneer Wrap", price: 140, category: "Snack", eta: "20 min" },
  { id: "FD3", name: "Masala Dosa", price: 120, category: "Breakfast", eta: "18 min" },
  { id: "FD4", name: "Tea Combo", price: 80, category: "Beverage", eta: "10 min" },
  { id: "FD5", name: "Chicken Biryani", price: 220, category: "Meal", eta: "30 min" },
  { id: "FD6", name: "Fresh Juice", price: 95, category: "Beverage", eta: "12 min" }
];

const complaints = ["Cleanliness", "Safety", "Food", "Technical Issue"];

module.exports = { buses: trains, pnrStatuses, foodItems, complaints };
