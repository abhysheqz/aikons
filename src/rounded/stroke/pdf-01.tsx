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
        d="M20 13v-2.343c0-.818 0-1.226-.152-1.594-.152-.367-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C12.514 2 12.161 2 11.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C4 4.59 4 6.211 4 9.456V13m9-10.5V3c0 2.828 0 4.243.879 5.121C14.757 9 16.172 9 19 9h.5M19.75 16h-2.5a1 1 0 0 0-1 1v2m0 0v3m0-3h3m-15 3v-2.5m0 0V16H6a1.75 1.75 0 1 1 0 3.5zm6-3.5h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5z"
      />
    </svg>
  );
};
export default Pdf_01;
