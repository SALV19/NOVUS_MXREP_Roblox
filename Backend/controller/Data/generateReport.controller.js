const { spawn } = require("node:child_process");
const path = require("path");

// Top level function:
// Sends data to python script to create an excel file
// @request: ExpressRequest
// @response: ExpressResponse
async function generateReport(request, response) {
  const pythonProcess = startProcess(request);
  const {excelFile, error} = await handleScriptProcess(pythonProcess, request);

  if (excelFile) {
    response
      .status(200)
      .setHeader(
        "Content-Disposition",
        'attachment; filename="simulationRun.xlsx"'
      )
      .setHeader("Content-Type", "application/octet-stream")
      .send(excelFile);
  } else {
    console.error("ERROR: ")
    console.error(error);
    response.status(500).send(error)
  }
}

// Spawns python script and pass arguments to generate the excel file
// @request: ExpressRequest
// @returns: ChildProcessWithoutNullStreams -> Python process creating file
function startProcess(request) {
  const script_path = path.join(__dirname, "../../python/generateReport.py");
  const python_path = path.join(__dirname, "../../python/venv/bin/python");

  return spawn(python_path, [
    script_path,
    JSON.stringify("{name: hola}"),
  ]);
}

// Creates the binary of the file to be sent to the users.
// @pythonProcess: ChildProcessWithoutNullStream
// @returns: JSON {file, error}
async function handleScriptProcess(pythonProcess) {
  // Binary buffer / array
  return new Promise((resolve, reject) => {
    const result = [];
    pythonProcess.stdout.on("data", (data_chunk) => {
      result.push(data_chunk);
    });

    pythonProcess.on("close", (code) => {
      if (code != 0) {
        return reject
      }
      const buffer = Buffer.concat(result);

      return resolve({ excelFile: buffer, error: null });
    });
  })
  
}

module.exports = {
  generateReport,
};
