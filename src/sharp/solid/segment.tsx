import React from "react";
const Segment: React.FC<
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
        d="M5.58 2h2.402l4.58 12.598-1.879.683L9.126 11h-4.69L2.88 15.281 1 14.599zm-.416 7h3.235L6.781 4.551z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.437 20.25H1v-2h2.437a2.751 2.751 0 0 1 5.125 0h6.875a2.751 2.751 0 0 1 5.125 0H23v2h-2.438a2.751 2.751 0 0 1-5.125 0H8.562a2.751 2.751 0 0 1-5.125 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 3a1 1 0 0 1 1-1h3.25a3.75 3.75 0 0 1 2.96 6.052A3.75 3.75 0 0 1 19.25 15H15a1 1 0 0 1-1-1zm2 6.5V13h3.25a1.75 1.75 0 1 0 0-3.5zm0-2h2.25a1.75 1.75 0 1 0 0-3.5H16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Segment;
