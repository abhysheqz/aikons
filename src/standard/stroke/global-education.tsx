import React from "react";
const GlobalEducation: React.FC<
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
        d="M12 12a5 5 0 0 0 0-10m0 10a5 5 0 0 1 0-10m0 10c1.105 0 2-2.239 2-5s-.895-5-2-5m0 10c-1.105 0-2-2.239-2-5s.895-5 2-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 15v6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 5c1 0 2.5.5 2.5.5v14.394C15.5 18.314 12 22 12 22s-3.5-3.686-10-2.106V5.5S3.5 5 4.5 5"
      />
    </svg>
  );
};
export default GlobalEducation;
