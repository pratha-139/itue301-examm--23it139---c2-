import VehicleCard from "./VehicleCard.jsx";import "./index.css";
function App() {
  return (
    <div>
      <h1>DriveEasy Car Rental</h1>
      <p>Choose your perfect ride.</p>

      <VehicleCard
        model="Hyundai i20"
        type="Hatchback"
        pricePerDay={1800}
        available={true}
      />

      <VehicleCard
        model="Honda City"
        type="Sedan"
        pricePerDay={2500}
        available={false}
      />
    </div>
  );
}

export default App;
