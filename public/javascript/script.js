const $uploadButton = document.querySelector('.upload');
const $sendButton = document.querySelector('.send');
const $fileNames = document.querySelector('.file-names');

const fileSave = {
  image: '',
};

async function snedFile(image) {
  await axios.post('http://localhost:3332/api/v1/file', { image });
}

async function toBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = () => reject('File don`t oppen');
  });
}

$uploadButton.onclick = async () => {
  const options = {
    types: [
      {
        description: 'images',
        accept: {
          'image/*': ['.png', '.jpeg', '.gif'],
        },
      },
    ],
    multiple: false,
  };

  const [fileHandle] = await window.showOpenFilePicker(options);
  const file = await fileHandle.getFile();
  const base64 = await toBase64(file);
  $fileNames.innerHTML = `<div>${file.name}</div>`;
  fileSave.image = base64;
};

$sendButton.onclick = () => {
  snedFile(fileSave.image);
};
