import React from "react";
const Briefcase_04: React.FC<
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
        strokeWidth={2}
        d="M11.973 11h.008"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.446 12v9.5h17.053V12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.483 6V2.5H8.461V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.492 6H2.508a.01.01 0 0 0-.01.01v4.965l4.399 3.012h10.138l4.467-3.012V6.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Briefcase_04;
