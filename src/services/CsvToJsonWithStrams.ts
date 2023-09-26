import fs, { ReadStream } from "fs";
import path from "path";
import TransformCsv from "./TransformCsv";

class CsvToJsonWithStreams {
  private csvStream: void | ReadStream;

  constructor(file: string) {
    this.csvStream = fs.createReadStream(
      path.resolve(__dirname, "..", "..", "uploads", file)
    );
  }

  public createJson(fileName: string) {
    const fileJson = fileName.replace(".csv", ".json");
    const transform = TransformCsv.transform();
    if (this.csvStream)
      this.csvStream
        .pipe(transform)
        .pipe(
          fs.createWriteStream(
            path.resolve(__dirname, "..", "..", "downloads", fileJson)
          )
        );
  }
}

export default CsvToJsonWithStreams;
