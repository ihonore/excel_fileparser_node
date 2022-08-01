import XLSX from 'xlsx';
const parse = (filename) => {
  const excelData = XLSX.readFile(filename);
  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name], { header: 1 }),
  }));
};
console.log(parse('src/assets/Medical Data.xlsx'));
