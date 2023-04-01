// Rental system
abstract class Vehcile {
    private make:string;
    private model:string;
    private year:number;
    private rented:boolean;
    constructor(Make:string,Model:string,Year:number,Rented:boolean) {
        this.make=Make;
        this.model=Model;
        this.year=Year;
        this.rented=Rented;
        
    }
     get Make(): string {
        return this.make;
      }
      set Make(value: string) {
        this.make = value;
      }
    
       get Model(): string {
        return this.model;
      }
       set Model(value: string) {
        this.model = value;
      }

      
       get Year(): number {
        return this.year;
      }
      set Year(value: number) {
        this.year = value}
    
       get Rented(): boolean {
        return this.rented;
      }
       set Rented(value: boolean) {
        this.rented = value;
      }


      abstract rentalRate(): number;

      

      
 rent(): string {
    if (this.rented) {
      return "this type "+this.make+" "+this.model+' is rented Already'
    } else {
      this.rented = true;
      return "Thankyou You have rented the vehcile "+this.make+" "+this.model ;
    }
  }

  return(): string {
    if (this.rented) {
      this.rented = false;
      return "Thank you for return "+this.make+" "+this.model;
    } else {
      return "This vehiclie "+ this.make+" "+this.model +" is not rented.";
    }
  }
    
}
class Car extends Vehcile {
  private seatnum: number;

  constructor(make: string, model: string, year: number, rented: boolean, seatnum: number) {
    super(make, model, year, rented);
    this.seatnum= seatnum;
  }

  rentalRate(): number {
    return 50; 
  }

  Seat_num(): number {
    return this.seatnum;
  }
}

class Truck extends Vehcile {
  private LoadCapable: number;//this is addition variable

  constructor(make: string, model: string, year: number, rented: boolean, LoadCapable: number) {
    super(make, model, year, rented);
    this.LoadCapable = LoadCapable;
  }

  rentalRate(): number {
    return 150; 
  }

  load_capable(): number {
    return this.LoadCapable;
  }
}

class Motorcycle extends Vehcile {
  private EngineProperty: string;

  constructor(make: string, model: string, year: number, rented: boolean, EngineProperty: string) {
    super(make, model, year, rented);
    this.EngineProperty = EngineProperty;
  }

   rentalRate(): number {
    return 70; 
  }

   Engine_property(): string {
    return this.EngineProperty;
  }
}
//INSTANCE FOR EACH TYPE OF VEHCILE
const car=new Car("honda",'city',2002,false,4);
console.log(car.rent());
console.log(car.return());
const truck=new Truck("Isuzu","hino",1994,false,5000)
console.log(truck.rent());
console.log(truck.return());
const motorcycle =new Motorcycle('Unique','UD 70',2019,false,"70cc");
console.log( motorcycle.rent());
console.log(motorcycle.return());