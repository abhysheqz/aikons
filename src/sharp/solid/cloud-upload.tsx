import React from "react";
const CloudUpload: React.FC<
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
        d="m12 12.086 3.707 3.707-1.414 1.414L13 15.914V21.5h-2v-5.586l-1.293 1.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.615A5.752 5.752 0 0 0 7 19h2.5v-.129l-3.328-3.328L12 9.714l5.829 5.829L14.5 18.87V19h3a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudUpload;
