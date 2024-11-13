"use client";
import { File, UploadCloud } from "lucide-react"; // Optional icons
import Image from "next/image";
import { useRef, useState } from "react";

export default function UploadField({
  children,
  isGallery = false,
}: {
  children: React.ReactNode;
  isGallery?: boolean;
  isAttachment?: boolean;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (validateFile(droppedFile)) {
      setFile(droppedFile);
      if (isGallery && isImage(droppedFile)) {
        setPreview(URL.createObjectURL(droppedFile));
      }
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile && validateFile(uploadedFile)) {
      setFile(uploadedFile);
      if (isGallery && isImage(uploadedFile)) {
        setPreview(URL.createObjectURL(uploadedFile));
      }
    }
  };

  // Validate file
  const validateFile = (file: File) => {
    if (isGallery) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (allowedTypes.includes(file.type)) {
        return true;
      } else {
        alert(
          "Only JPEG, PNG, or WEBP images are accepted for Gallery uploads."
        );
        return false;
      }
    }
    // No validation for attachments
    return true;
  };

  // Check if the file is an image
  const isImage = (file: File) => {
    return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
  };

  // Handle onClick
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full h-full pt-1">
      <div
        className="border-dashed border-2 border-figma-semilar rounded-md p-6 text-center bg-gray-50 hover:bg-gray-100 my-transition cursor-pointer flex place-content-center min-h-[200px]"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          {file ? (
            // For Gallery: Show Image Preview
            isGallery && isImage(file) ? (
              <div className="relative w-[300px] h-[200px]">
                <Image
                  src={preview || ""}
                  alt="Preview"
                  quality="70"
                  fill
                  loading="lazy"
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
              // For Attachments: Show File Icon or Filename
              <div className="flex flex-col items-center justify-center">
                <File className="h-10 w-10 text-figma-semilar" />
                <p className="text-sm text-gray-700 mt-2">
                  Uploaded File: <strong>{file.name}</strong>
                </p>
              </div>
            )
          ) : (
            // Default UI: Before any file is uploaded
            <>
              <UploadCloud className="size-4 text-figma-semilar" />
              {children}
            </>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          accept={isGallery ? "image/jpeg, image/png, image/webp" : "*"} // Accept all files for attachments
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {file && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            Uploaded: <strong>{file.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
