import React from "react";
const FileMusic: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12V9l-7-7H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v5a2 2 0 0 0 2 2h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.397 19.745c0 1.243-.984 2.252-2.198 2.252-1.215 0-2.199-1.009-2.199-2.252 0-1.244.984-2.253 2.198-2.253 1.215 0 2.2 1.009 2.2 2.253m0 0V14c.22.496 1.307 2.7 2.604 2.7"
      />
    </svg>
  );
};
export default FileMusic;
