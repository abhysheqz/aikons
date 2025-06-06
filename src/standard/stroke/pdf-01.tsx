import React from "react";
const Pdf_01: React.FC<
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
        d="m4 12.998.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5"
      />
      <path
        fill="currentColor"
        d="M19.5 16.75a.75.75 0 0 0 0-1.5zM16 16v-.75a.75.75 0 0 0-.75.75zm-.75 6a.75.75 0 0 0 1.5 0zM19 19.75a.75.75 0 0 0 0-1.5zM4 16v-.75a.75.75 0 0 0-.75.75zm-.75 6a.75.75 0 0 0 1.5 0zM10 16v-.75a.75.75 0 0 0-.75.75zm0 6h-.75c0 .414.336.75.75.75zm9.5-6.75H16v1.5h3.5zm-4.25.75v3h1.5v-3zm0 3v3h1.5v-3zm.75.75h3v-1.5h-3zm-12-3h1.75v-1.5H4zM4.75 22v-2.5h-1.5V22zm0-2.5V16h-1.5v3.5zm1-.75H4v1.5h1.75zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm4.25 0h1.5v-1.5H10zM12.75 18v2h1.5v-2zm-1.25 3.25H10v1.5h1.5zm-.75.75v-6h-1.5v6zm2-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.25 20zm-1.25-3.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default Pdf_01;
