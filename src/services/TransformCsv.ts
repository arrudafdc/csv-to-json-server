import { Transform } from "stream";

class TransformCsv {
  static transform() {
    const tranform = new Transform({
      transform(chunk, encoding, callback) {
        const csv = chunk.toString();
        callback(null, csv);
      },
    });
    return tranform;
  }
}

export default TransformCsv;
