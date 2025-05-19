import React from "react";
const EuroReceive: React.FC<
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
        d="M3 10h6m-6 4h6m5-8c-.948-1.23-2.305-2-3.811-2C7.323 4 5 6.786 5 10.222v3.556C5 17.214 7.323 20 10.189 20c1.506 0 2.863-.77 3.811-2M16.5 14.5 14 12l2.5-2.5M21 12h-6.391"
      />
    </svg>
  );
};
export default EuroReceive;
