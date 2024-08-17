import fs from "fs";

fs.appendFile("notes.txt", "This is my first note.", function (err) {
  if (err) console.log(err.message);
  console.log("saved successfully first add");
  fs.readFile("./notes.txt", "utf8", function (err, data) {
    if (err) console.log(err.message);
    console.log(data);

    fs.appendFile("notes.txt", " Adding some more content.", function (err) {
      if (err) console.log(err.message);
      console.log("saved successfully 2 ");
      fs.rename("./notes.txt", "new.txt", function (err) {
        if (err) console.log(err.message);
        console.log("renamed successfully");
        fs.unlink("./new.txt", (err) => {
          if (err) console.log(err.message);
          console.log("deleted successfully");
        });
      });
    });
  });
});
