import React from "react";
const Toilet_02: React.FC<
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
        strokeWidth={1.5}
        d="M14.4 13.981c.972-.91 1.6-2.36 1.6-3.993 0-2.757-1.79-4.992-4-4.992S8 7.231 8 9.988c0 1.633.628 3.083 1.6 3.993"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 15.19v-.69a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v.69a5 5 0 0 1-1.159 3.2l-.756.908a1 1 0 0 0 .06 1.348l.751.75a.353.353 0 0 1-.25.604H8.354a.354.354 0 0 1-.25-.604l.75-.75a1 1 0 0 0 .061-1.348l-.756-.907A5 5 0 0 1 7 15.19M5.5 12l-.02-.01a2 2 0 0 1-1.095-1.58l-.652-6.2A2 2 0 0 1 5.722 2h12.556a2 2 0 0 1 1.99 2.21l-.653 6.2a2 2 0 0 1-1.095 1.58l-.02.01"
      />
    </svg>
  );
};
export default Toilet_02;
