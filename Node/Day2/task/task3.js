import os from "os";
import fs from "fs/promises";
import path from "path";

async function createReport() {

    await fs.mkdir("reports", { recursive: true });

    let filePath = path.join("reports", "os-report.json");

    let data = {
        platform: os.platform(),
        freeRAM: os.freemem(),
        totalRAM: os.totalmem(),
        homeDirectory: os.homedir()
    };

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    console.log("Report saved successfully");

    let result = await fs.readFile(filePath, "utf-8");

    let report = JSON.parse(result);

    console.log(report);
}

createReport();