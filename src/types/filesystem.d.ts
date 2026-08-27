// Permite que o TypeScript reconheça as APIs do File System Access
declare interface FileSystemHandle {
  kind: "file" | "directory";
  name: string;
}

declare interface FileSystemFileHandle extends FileSystemHandle {
  getFile(): Promise<File>;
  createWritable(options?: any): Promise<any>;
}

declare interface FileSystemDirectoryHandle extends FileSystemHandle {
  getFileHandle(name: string, options?: any): Promise<FileSystemFileHandle>;
  getDirectoryHandle(name: string, options?: any): Promise<FileSystemDirectoryHandle>;
  removeEntry(name: string, options?: any): Promise<void>;
}

// Funções globais do File System Access API
declare function showOpenFilePicker(options?: any): Promise<FileSystemFileHandle[]>;
declare function showDirectoryPicker(options?: any): Promise<FileSystemDirectoryHandle>;
declare function showSaveFilePicker(options?: any): Promise<FileSystemFileHandle>;
