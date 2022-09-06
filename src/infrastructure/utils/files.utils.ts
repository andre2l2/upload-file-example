import fs from 'fs';

export class FileUtils {
  constructor() {}

  private getExtention(infos: string): string {
    const type = infos.split('/')[1];
    return type.split(';')[0];
  }

  saveFile(fileBase64: string): void {
    const [infos, file] = fileBase64.split(',');
    const buffer = Buffer.from(file, 'base64');
    const extention = this.getExtention(infos);

    fs.writeFile(`./public/files/${new Date().toISOString()}.${extention}`, buffer, (err) => {
      if (err) console.log(err);
    });
  }
}
