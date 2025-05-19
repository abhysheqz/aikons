import React from "react";
const AppleNews: React.FC<
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
        d="M13.307 2.713A.75.75 0 0 1 14 2.25h7.002a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.28.53l-7.002-7a.75.75 0 0 1-.163-.817M10.693 21.287a.75.75 0 0 1-.693.463H3a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.28-.53l7 7a.75.75 0 0 1 .163.817M2.25 3A.75.75 0 0 1 3 2.25h6a.75.75 0 0 1 .53.22l12 12c.141.14.22.331.22.53v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.53-.22l-12-12A.75.75 0 0 1 2.25 9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppleNews;
