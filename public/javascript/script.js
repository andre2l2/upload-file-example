import FileUtils from './utils/file.utils.js';
import HtmlUtil from './utils/html.utils.js';
import HttpUtils from './utils/http.utils.js';

const apiUrl = 'http://localhost:3332';
const htmlUtil = new HtmlUtil();
const fileUtils = new FileUtils();
const httpUtils = new HttpUtils(apiUrl);

const $uploadButton = document.querySelector('.upload');
const $sendButton = document.querySelector('.send');
const $fileNames = document.querySelector('.file-names');

const fileSave = {
  image: '',
};

$uploadButton.onclick = async () => {
  const file = await fileUtils.filePicker();
  const base64 = await fileUtils.toBase64(file);
  htmlUtil.innerHtml($fileNames, `<div>${file.name}</div>`);
  fileSave.image = base64;
};

$sendButton.onclick = () => {
  httpUtils.post('/api/v1/file', { image: fileSave.image });
};
