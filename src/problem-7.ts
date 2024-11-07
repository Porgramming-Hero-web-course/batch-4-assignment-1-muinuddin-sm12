{
  //
  
  // Problem 7:
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - this.year;
      return carAge;
    }
  }
  //   const car = new Car('Honda', 'Civic', 2018)
  //   const carAge = car.getCarAge()
  //   console.log(carAge)

  //
}
