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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 3V9l-7-7H4v20h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.397 19.745c0 1.243-.985 2.252-2.199 2.252s-2.199-1.009-2.199-2.252c0-1.244.985-2.253 2.199-2.253s2.199 1.009 2.199 2.253Zm0 0V14s0 2.7 2.604 2.7"
      />
    </svg>
  );
};
export default FileMusic;
