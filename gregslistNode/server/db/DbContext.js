import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema } from '../models/Car.js';
import { HouseSchema } from '../models/house.js';
// ANCHOR here is where we 'register' our schemas (models) to the database
// ANCHOR this step is what creates 'collections' in our database

class DbContext {

  House = mongoose.model('House', HouseSchema)
  
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  // ANCHOR left-hand side is how we will reference this collection in our local app code; think AppState.cars here
  Cars = mongoose.model('Car', CarSchema)
  // ANCHOR right-hand side is how we 'register' and create a collection of 'cars' in the database and we specify the collection to be our CarSchema
}

export const dbContext = new DbContext()
