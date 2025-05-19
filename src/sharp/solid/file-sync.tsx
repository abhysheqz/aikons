import React from "react";
const FileSync: React.FC<
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
        d="M15.25 15.75c-1.395 0-2.569 1.034-2.758 2.356l-.092.644h-1.736L9.75 15.5l1.455-.364.388 1.148a4.31 4.31 0 0 1 3.656-2.034c1.445 0 2.721.722 3.488 1.82l.43.616-1.231.858-.43-.615a2.75 2.75 0 0 0-2.257-1.179M20.75 21.5l-1.455.364-.39-1.148a4.31 4.31 0 0 1-3.656 2.034 4.25 4.25 0 0 1-3.488-1.82l-.428-.616 1.23-.858.429.615a2.75 2.75 0 0 0 2.257 1.179c1.394 0 2.569-1.033 2.758-2.356l.092-.644h1.736z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h8.51a5.5 5.5 0 0 1-1.023-1.106C9.267 19.445 8.432 16.032 8.2 14.6L15.25 13c1.871 0 3.523.936 4.513 2.356.367.45.696 1.026.987 1.66V8.63L13.36 1.25zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileSync;
