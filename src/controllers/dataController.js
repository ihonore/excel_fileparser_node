import XLSX from 'xlsx';
import jwtDecode from 'jwt-decode';

const parse = (filename) => {
  const excelData = XLSX.readFile(filename);
  return Object.keys(excelData.Sheets).map((name) => ({
    name,
    data: XLSX.utils.sheet_to_json(excelData.Sheets[name], { header: 1 }),
  }));
};
// console.log(parse('src/assets/Medical Data.xlsx'));

export class DataController {
  async getAllDatas(decoded, req, res, next) {
    try {
      const all = await parse('src/assets/Medical Data.xlsx');
      let dataToReturn;
      switch (decoded.userType.toLowerCase()) {
        case 'physician':
          dataToReturn = all.filter(
            (data) => data.name == 'Physicians missions 2000 - 2002'
          );
          break;
        case 'admin':
          dataToReturn = all.filter(
            (data) => data.name == 'Most bough drugs 2000 - 2002'
          );
          break;

        case 'patient':
          dataToReturn = all.filter(
            (data) => data.name == 'Patient illnesses 2000 - 2002'
          );
          break;
        case 'paharmacists':
          dataToReturn = all.filter(
            (data) => data.name == 'Patient illnesses 2000 - 2002'
          );
          break;
        default:
          dataToReturn = "You are does't have any access!";
      }

      console.log(decoded);
      res.status(200).json({
        status: 200,
        message: 'These are data you are allowed to access',
        data: dataToReturn,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
