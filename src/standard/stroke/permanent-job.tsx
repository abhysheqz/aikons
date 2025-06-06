import React from "react";
const PermanentJob: React.FC<
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
        d="M7 9H6m5 0h-1M7 6H6m5 0h-1M18.5 15h-1m1-4h-1M14 8v13h8V10a2 2 0 0 0-2-2zm0 0V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"
      />
      <path
        fill="currentColor"
        d="M10 22v.75a.75.75 0 0 0 .75-.75zm-8 0h-.75c0 .414.336.75.75.75zm5.25-8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 8.75 14zM6 15.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 16.75zM4.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 14zM6 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 6 11.25zm4 8.5H2v1.5h8zM2.75 22A3.25 3.25 0 0 1 6 18.75v-1.5A4.75 4.75 0 0 0 1.25 22zM6 18.75A3.25 3.25 0 0 1 9.25 22h1.5A4.75 4.75 0 0 0 6 17.25z"
      />
    </svg>
  );
};
export default PermanentJob;
