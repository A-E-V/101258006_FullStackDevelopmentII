const fs = require('fs');
const csv = require('csv-parser');

// Filter and write data to file
function filterAndWriteData(inputFile, outputFileName, filterCondition) {
  const writeStream = fs.createWriteStream(outputFileName);

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      if (filterCondition(row)) {
        writeStream.write(`${Object.values(row).join(',')}\n`);
      }
    })
    .on('end', () => {
      writeStream.end();
      console.log(`Data filtered and written to ${outputFileName}`);
    });
}

// Delete any existing files
['canada.txt', 'usa.txt'].forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted`);
  }
});

// Filter data for Canada and write to canada.txt
filterAndWriteData('input_countries.csv', 'canada.txt', (row) => row.country === 'Canada');

// Filter data for United States and write to usa.txt
filterAndWriteData('input_countries.csv', 'usa.txt', (row) => row.country === 'United States');
