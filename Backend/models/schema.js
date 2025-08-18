const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SoldProducts = new Schema({
  id: ObjectId,
  runId: String,
  orderId: Number,
  price: Number,
  amount: Number,
  team: String,
  player: {
    userId: String,
    name: String
  },
  budgetBefore: Number,
  budgetAfter: Number,
  date: Date
});

const Employee = new Schema({
  id: ObjectId,
  runId: String,
  employeeId: String,
  type: String,
  baseSalary: Number,
  imms: Number,
  infonavit: Number,
  vouchers: Number,
  bonsu: Number,
  savings: Number,
  cafeteria: Number,
  isr: Number
})

const BOM = new Schema({
  id: ObjectId,
  runId: String,
  pieceId: Number,
  description: String,
  amount: Number,
  price: Number,
  scrap: Number
})

const COMonth = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  month: Number,
  percentage: Number
})

const CoYear = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  orders: Number,
})

const Deprecation = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  type: String,
  percentage: Number,
})

const Production = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  quality: Number,
  secondsXUnit: Number,
  hourShift: Number,
  shifts: Number,
  productionLines: Number,
  workingDays: Number,
  workingWeeks: Number,
  yearWorkingMonths: Number,
})

const ProductionLine = new Schema({
  id: ObjectId,
  vehicle: String
})

const ProductionLinePhase = new Schema({
  id: ObjectId,
  runId: String,
  productionLineID: Number,
  fase: String,
  processingTime: Number,
  operatorsNeeded: Number,
})