import React from "react";
const JobLink: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.5V6H2v15.5h10M16 6l-1-3.5H8L7 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 18.5h-3m0 3a3 3 0 1 1 0-6m3 6a3 3 0 1 0 0-6"
      />
    </svg>
  );
};
export default JobLink;
