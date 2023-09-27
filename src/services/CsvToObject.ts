interface IJsonObject {
  [key: string]: string;
}

class CsvToObject {
  static parser(csv: string, separator: string): object[] {
    const lines = csv.split("\n");
    const withoutSemicolon = lines.map((line) => {
      return line.replace(/[;]+/g, ",");
    });
    const withoutQuot = withoutSemicolon.map((line) => {
      return line.replace(/["]+/g, "");
    });

    const [header, ...body] = withoutQuot;
    const keys = header.split(separator);

    const finalFile = body.map((line) => {
      return line.split(",").reduce((acc, cur, i) => {
        const toAdd: IJsonObject = {};
        toAdd[keys[i]] = cur;
        return { ...acc, ...toAdd };
      }, {});
    });

    return finalFile;
  }
}

export default CsvToObject;
