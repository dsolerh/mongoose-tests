const mongoose = require("mongoose");
const User = require("./schemas/user.schema");

mongoose.connect(
  "mongodb://localhost/mongo-node-tests",
  () => console.log("connected"),
  (e) => console.error(e)
);

run();
async function run() {
  console.clear();
  // const u1 = new User({ name: "Krla", age: 26 });
  // await u1.save();
  try {
    // const u2 = await User.create({
    //   name: "Dany",
    //   age: "12",
    //   address: {
    //     street: "170 st",
    //     province: "123",
    //     city: "La hanama",
    //   },
    // });
    // console.log(u2);
    // const usr = await User.findOne({id: "61f43ac421913dd44b99d377"});
    // console.log("🚀 ~ file: index.js ~ line 26 ~ run ~ usr", usr)
    console.clear();
    const r = await User.findByIdAndUpdate(
      "61f43ac421913dd44b99d377",
      { name: "Santana" },
      { new: true }
    );
    console.log("🚀 ~ file: index.js ~ line 30 ~ run ~ r", r);
    const r2 = await r.updateOne({ age: 20 }, { new: true });
    console.log("🚀 ~ file: index.js ~ line 36 ~ run ~ r2", r2)
    console.log("🚀 ~ file: index.js ~ line 36 ~ run ~ r", r);

    // for (const u of usr) {
    //   // console.log("🚀 ~ file: index.js ~ line 30 ~ run ~ u", u);
    //   // console.log(u.address);
    //   // const r = await u.update({name: "KK"});
    //   // console.log(r);
    //   // console.log(u.createdAt);
    // }
    // console.log("🚀 ~ file: index.js ~ line 26 ~ run ~ usr", usr)
  } catch (error) {
    console.log(error);
  }
  // u2.name = "Cheese";

  // u2.food = true;
  // await u2.save();
  // console.log(u1);
}
