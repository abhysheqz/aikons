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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12.5V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.793-2.775a1 1 0 0 0-.961-.725H9.254a1 1 0 0 0-.961.725L7.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 18.5h-3m0 3a3 3 0 1 1 0-6m3 6a3 3 0 1 0 0-6"
      />
    </svg>
  );
};
export default JobLink;
