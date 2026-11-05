import fs from "fs/promises";

async function readSystemInfo() {
    try {
        let data = await fs.readFile("system-info.txt", "utf-8");

        console.log(data);
    }
    catch (error) {
        console.log("File not found");
    }
}

readSystemInfo();