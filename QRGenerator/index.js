import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
            type: "input",
            name: "url", 
            message: "What is the URL?"
        }
    ])
    .then((answers)=>{
        var qr_svg= qr.image(answers.url, {type: "png"});
        qr_svg.pipe(fs.createWriteStream("qr.png"));
        console.log("QR generated!");
    });