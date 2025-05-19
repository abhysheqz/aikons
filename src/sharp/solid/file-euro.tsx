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
      <path
        fill="currentColor"
        d="M19.776 1.25c.538 0 .974.438.974.977v8.841h-1.948V3.205h-7.79v6.84H4.198v10.75h8.763v1.955H3.223a.975.975 0 0 1-.973-.977V8.663L9.636 1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.791 16.75c.053-2.101 1.59-4 3.732-4 1.425 0 2.605.865 3.227 2.04l-1.767.936c-.335-.633-.895-.976-1.46-.976-.815 0-1.681.773-1.731 2h2.075v2h-2.075c.05 1.227.916 2 1.731 2 .565 0 1.125-.343 1.46-.976l1.767.936c-.622 1.175-1.802 2.04-3.227 2.04-2.142 0-3.68-1.899-3.732-4h-.924v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEuro;
