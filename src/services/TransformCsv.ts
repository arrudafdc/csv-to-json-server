import { Transform } from "stream";
import CsvToObject from "./CsvToObject";

class TransformCsv {
  static transform(separator: string) {
    const tranform = new Transform({
      transform(chunk, encoding, callback) {
        const csv = chunk.toString();
        const csvObject = CsvToObject.parser(csv, separator);
        const result = JSON.stringify(csvObject);
        callback(null, result);
      },
    });
    return tranform;
  }
}

export default TransformCsv;
