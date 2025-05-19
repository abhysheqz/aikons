import React from "react";
const EuroSend: React.FC<
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
        d="M2 10h6M2 14h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 6c-.948-1.23-2.305-2-3.811-2C6.323 4 4 6.786 4 10.222v3.556C4 17.214 6.323 20 9.189 20c1.506 0 2.863-.77 3.811-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5"
      />
    </svg>
  );
};
export default EuroSend;
