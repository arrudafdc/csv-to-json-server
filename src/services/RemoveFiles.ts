import fs from "fs";

class RemoveFiles {
  public index(path: string): void {
    setTimeout(() => {
      fs.unlink(path, () => {
        console.log("successfully deleted");
      });
    }, 60000);
  }
}

export default new RemoveFiles();
