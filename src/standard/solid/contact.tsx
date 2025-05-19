import React from "react";
const Contact: React.FC<
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
        d="M5.75 3.25A2.75 2.75 0 0 0 3 6v14a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.5 20V6a2.75 2.75 0 0 0-2.75-2.75zm6.5 4.015a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m.002 5.985A4.25 4.25 0 0 0 8 17.5c0 .414.336.75.75.75h7.003a.75.75 0 0 0 .75-.75 4.25 4.25 0 0 0-4.251-4.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M16.25 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact;
