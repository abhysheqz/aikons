import React from "react";
const FileManagement: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.626 1.25v1.349c.768.19 1.45.595 1.985 1.146l1.343-.825 1.047 1.705-1.37.84a4.33 4.33 0 0 1 0 2.57l1.37.84-1.046 1.705-1.344-.825a4.17 4.17 0 0 1-1.985 1.146v1.349h-2v-1.349A4.17 4.17 0 0 1 5.64 9.755l-1.344.825L3.25 8.875l1.37-.84a4.33 4.33 0 0 1 0-2.57l-1.37-.84L4.298 2.92l1.343.825a4.17 4.17 0 0 1 1.986-1.146V1.25zm-1 3.227c-1.194 0-2.2.996-2.2 2.273s1.006 2.273 2.2 2.273 2.2-.996 2.2-2.273-1.006-2.273-2.2-2.273"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.396 1.25 2.323 3.786-1.685 1.034a5.6 5.6 0 0 1 0 1.36l1.686 1.034-2.354 3.835-1.64-1.006a5.4 5.4 0 0 1-.85.49V13.5h-4.5v-1.718a5.4 5.4 0 0 1-.852-.49L3.884 12.3l-.634-1.033.001 11.484h10.11l7.389-7.38V1.25zm-.834 19.545L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileManagement;
