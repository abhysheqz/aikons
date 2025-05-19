import React from "react";
const CursorEdit_01: React.FC<
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
        d="M4.75 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 4.75 4M4 4.75a.75.75 0 0 1 .75.75v8a.75.75 0 1 1-1.5 0v-8A.75.75 0 0 1 4 4.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m8.351 6.818 12.992 4.516c.963.335 1.1 1.64.227 2.168l-3.176 1.917 3.5 3.48c.474.47.475 1.234.003 1.706l-1.294 1.293c-.47.47-1.233.47-1.704 0l-3.493-3.492-1.9 3.152c-.527.874-1.835.739-2.17-.226L6.818 8.353c-.332-.953.583-1.864 1.533-1.534M1.97 1.97a.75.75 0 0 1 .53-.22h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53M12.75 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zM1.75 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default CursorEdit_01;
