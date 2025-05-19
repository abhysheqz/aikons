import React from "react";
const VintageClock: React.FC<
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
        d="M3 17.25h1q.129 0 .254.012V6.738A3 3 0 0 1 4 6.75H3v-1.5h1c.69 0 1.25-.56 1.25-1.25A.75.75 0 0 1 6 3.25h2.13c.86-1.21 2.275-2 3.874-2s3.013.79 3.873 2H18a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25h1v1.5h-1q-.124 0-.246-.01v10.52q.122-.01.246-.01h1v1.5h-1c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-.75.75h-2.123c-.86 1.21-2.274 2-3.873 2s-3.013-.79-3.873-2H6a.75.75 0 0 1-.75-.75c0-.69-.56-1.25-1.25-1.25H3zM14.065 9l-2.061 2.06-1.06-1.06 2.06-2.06zm-2.811 8.25v-2.559a4.751 4.751 0 1 1 1.5 0v2.559h1.25v1.5h-4v-1.5zm.75-10.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VintageClock;
