interface IJsonObject {
  [key: string]: string;
}

class CsvToObject {
  static parser(csv: string, separator: string): object[] {
    const lines = csv.split("\n");
    console.log(lines);
    const teste = lines.map((line) => {
      return line.replace(/[;]+/g, ",");
    });
    const outroTeste = teste.map((line) => {
      return line.replace(/["]+/g, "");
    });

    const [header, ...body] = outroTeste;
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
