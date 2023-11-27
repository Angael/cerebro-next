import { uploadFile } from "@/app/upload/files/uploadFile";
import { ExtendedFile } from "@/app/upload/files/uploadTypes";

interface IOptions {
  file: ExtendedFile;
  tags: string[];
  dir?: string;
  private?: boolean;
  onProgress: (progress: number) => void;
}

export const uploadFileToBackend = ({ file, tags, onProgress }: IOptions) => {
  const formData = new FormData();
  formData.append("file", file.file);
  tags.forEach((tag) => {
    formData.append("tags", tag);
  });

  return uploadFile(formData, {
    onProgress,
  });
};
