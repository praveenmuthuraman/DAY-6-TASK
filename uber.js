class UberPricing {
  constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
    this.bookingFee = bookingFee;
  }

  calculatePrice(distance, time) {
    const distanceCost = distance * this.costPerMile;
    const timeCost = time * this.costPerMinute;

    const totalPrice =
      this.baseFare + distanceCost + timeCost + this.bookingFee;
    return totalPrice;
  }
}
const uberX = new UberPricing(2, 3, 15, 75); 
const distanceTraveled = 10; 
const timeElapsed = 20;

const totalPrice = uberX.calculatePrice(distanceTraveled, timeElapsed);
console.log(`The total price for the Uber ride is IND (Rs ${totalPrice.toFixed(2)})`);