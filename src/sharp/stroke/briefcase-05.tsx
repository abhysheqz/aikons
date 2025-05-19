import React from "react";
const Briefcase_05: React.FC<
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
        d="M3.452 12v9.5h17.04V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.971 11h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.48 6V2.5H8.462V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.49 6H2.51a.01.01 0 0 0-.01.01v4.207c2.803 6.778 17.206 5.67 19 0V6.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Briefcase_05;
