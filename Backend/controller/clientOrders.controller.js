const mongoose = require("mongoose");
const {coYearModel, coMonthModel} = require("../models/clientOrders.model");

async function clientOrders(data) {
  let session = await mongoose.startSession();
  session.startTransaction()

  try {
    const coYear = await coYearModel.createCOYear(data.COYear, {session});
    const coMonth = await coMonthModel.createCOMonth(data.COMonth, {session});
    await session.commitTransaction();
  }
  catch (error) {
    console.error('abort transaction')
    await session.abortTransaction()
  } finally {
    session.endSession()
  }
}

module.exports = {
  clientOrders,
};
