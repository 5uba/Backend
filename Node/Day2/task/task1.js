import os from "os";
import fs from "fs/promises";

async function saveSystemInfo() {
    let platform = os.platform();
    let architecture = os.arch();
    let hostname = os.hostname();
    let totalRAM = os.totalmem();

    let data = `Platform: ${platform} Architecture: ${architecture} Hostname: ${hostname} Total RAM: ${totalRAM}`;
    await fs.writeFile("system-info.txt", data);
    console.log("System information saved successfully");
}

saveSystemInfo();