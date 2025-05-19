import React from "react";
const FileEuro: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M10 2v7H3" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 20.492c-.478.904-1.349 1.508-2.343 1.508-1.51 0-2.734-1.393-2.734-3.111V17.11c0-1.718 1.224-3.111 2.734-3.111.994 0 1.865.604 2.343 1.508M14 18h5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.968 10.986V2.014a.01.01 0 0 0-.01-.01H9.957L3 8.99V21.99q0 .01.01.01h9.97"
      />
    </svg>
  );
};
export default FileEuro;
