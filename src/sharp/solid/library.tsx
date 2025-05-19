import React from "react";
const Library: React.FC<
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
        d="M1.75 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v3.25h-9.5zm0 4.75h9.5V21.5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM6.5 16.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zM20.1 6.092l-7.6 1.243V2.698l6.183-.94a.75.75 0 0 1 .854.63zM12.85 21.61l-.35-2.3V8.855l7.826-1.28 1.916 12.608a.75.75 0 0 1-.629.854l-7.91 1.202a.75.75 0 0 1-.853-.629m3.893-5.576a1 1 0 1 0 .518 1.932l.009-.002a1 1 0 0 0-.518-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Library;
