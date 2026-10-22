function VehicleCard({ model, type, pricePerDay, available }) {
  return (
    <div className="vehicle-card">
      <h2>{model}</h2>
      <p>Type: {type}</p>
      <p>Price per day: ₹{pricePerDay}</p>

      {available ? (
        <button onClick={() => alert(`Booking ${model}`)}>
          Book Now
        </button>
      ) : (
        <span className="unavailable">
          Not Available
        </span>
      )}
    </div>
  );
}

export default VehicleCard;
