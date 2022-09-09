class FileUtils {
  constructor() {}

  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject('File don`t oppen');
    });
  }

  async filePicker() {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'images',
          accept: {
            'image/*': ['.png', '.jpeg', '.gif'],
          },
        },
      ],
      multiple: false,
    });
    return await fileHandle.getFile();
  }
}

export default FileUtils;
