const mongoose = require("mongoose");
const User = require("./schemas/user.schema");

mongoose.connect(
  "mongodb://localhost/mongo-node-tests",
  () => console.log("connected"),
  (e) => console.error(e)
);

run();
async function run() {
  // const u1 = new User({ name: "Krla", age: 26 });
  // await u1.save();
  try {
    // const u2 = await User.create({
    //   name: "Dany",
    //   age: "scac4",
    //   address: {
    //     street: "170 st",
    //     province: "123",
    //     city: "La hanama",
    //   },
    // });
    // console.log(u2);
    const usr = await User.find();
    console.clear();
    for (const u of usr) {
      // console.log(u.address);
      console.log(u.file);
      // console.log(u.createdAt);
    }
    // console.log("🚀 ~ file: index.js ~ line 26 ~ run ~ usr", usr)
    
  } catch (error) {
    console.log(error);
  }
  // u2.name = "Cheese";

  // u2.food = true;
  // await u2.save();
  // console.log(u1);
}
