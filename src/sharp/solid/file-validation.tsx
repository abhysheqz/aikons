import React from "react";
const FileValidation: React.FC<
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
        d="M17 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.197 3.205h7.79V1.25H2.224a.975.975 0 0 0-.974.977v13.11l7.386 7.413h10.14a.97.97 0 0 0 .974-.977v-7.818h-1.947v6.84h-7.79v-6.84H3.197z"
      />
    </svg>
  );
};
export default FileValidation;
