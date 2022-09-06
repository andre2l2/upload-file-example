import { FileUtils } from '../../infrastructure/utils/files.utils';

const fileUtils = new FileUtils();

export function saveFile(file: string) {
  fileUtils.saveFile(file);
}
