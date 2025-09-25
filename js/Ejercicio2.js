function getCompromisedFiles(lastSafeDownload, droneLogs) {
    const compromised = new Set();

    for (const [fileId, timestamp] of droneLogs) {
        if (timestamp > lastSafeDownload) {
            compromised.add(fileId);
        }
    }

    return Array.from(compromised).sort((a, b) => a - b);
}


const lastSafeDownload = 1670000000;

const droneLogs = [
    [42, 1670000500],
    [13, 1670000000],
    [8, 1670000700],
    [8, 1670000001],
    [99, 1669999999]
];

console.log(getCompromisedFiles(lastSafeDownload, droneLogs));
