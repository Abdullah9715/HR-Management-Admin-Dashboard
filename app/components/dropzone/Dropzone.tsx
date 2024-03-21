import { ADDEMPLOYEE } from "@/app/constants/Images";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import React from "react";

const Dropzone = ({ content }: { content: string }) => {
  return (
    <div className="space-y-4 text-white w-[48%]">
      <h1>{content}</h1>
      <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
        <UploadDropzone
          appearance={{
            button: {
              background: "transparent",

              color: "#E25319",
            },
            uploadIcon: {
              color: "#E25319",
            },
            label: { color: "#E25319" },
            container: {
              display: "flex",
            },
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
        <Image src={ADDEMPLOYEE.UPLOAD} alt="upload" width={40} height={40} />
        <h1>
          Drag & Drop or <span className="text-primary">choose file </span>
          to upload
        </h1>
        <h2>Supported formats : Jpeg, pdf</h2>
      </div>
    </div>
  );
};
export default Dropzone;
