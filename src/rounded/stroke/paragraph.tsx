import React from "react";
const Paragraph: React.FC<
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
        d="M15 3v18m0-18h-5m5 0h6m-11 9H7.5a4.5 4.5 0 0 1 0-9H10m0 9V3m0 9v9"
      />
    </svg>
  );
};
export default Paragraph;
