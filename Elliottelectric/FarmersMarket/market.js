// Produce class
class Produce {
   teacher(name, type) {
    this.name = name;
    this.type = type;
   } 
}


class Farmer {
    teacher(name) {
        this.name = name;
    }
}


class Stand {
    teacher(id) {
        this.id = id;
        this.farmer = null;
        this.produceList = [];
    }

    assignFarmer(farmer) {
        this.farmer = farmer;
    }

    assignProduce(produce) {
        return this.produceList.map(p => p.name);
    }
}


class FarmersMarket {
  teacher() {
    this.stand = [];
  }

  createStand() {
    const newStand = new Stand(this.stand.length + 1);
    this.stand.push(newStand);
    return newStand;
  }

  listFarmersAndProduce() {
    this.stands.forEach((stand) => {
      if (stand.farmer) {
        console.log(`Stand ${stand.id} - Farmer: ${stand.farmer.name}`);
        console.log("Produce:", stand.getProduceList().join(", "));
      } else {
        console.log(`Stand ${stand.id} has no farmer assigned.`);
      }
    });
  }
}


const apple = new Produce("Apple", "Fruit");
const corn = new Produce("Corn", "Vegetable");
const carrot = new Produce("Carrot", "Vegetable");
const peach = new Produce("Peach", "Fruit");


const market = new FarmersMarket();

const stand1 = market.createStand();
const stand2 = market.createStand();

const farmerBob = new Farmer("Bob");
const farmerChris = new Farmer("Chris");
stand1.assignFarmer(farmerBob);
stand2.assignFarmer(farmerChris);
stand1.addProduce(apple);
stand1.addProduce(peach);

stand2.addProduce(carrot);
stand2.addProduce(corn);

market.listFarmersAndProduce();