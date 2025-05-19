import React from "react";
const Energy: React.FC<
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
        d="M13.737 2.288A.75.75 0 0 1 14.25 3v7.25H18a.75.75 0 0 1 .6 1.2l-7.5 10A.75.75 0 0 1 9.75 21v-7.25H6a.75.75 0 0 1-.6-1.2l7.5-10a.75.75 0 0 1 .837-.262"
      />
    </svg>
  );
};
export default Energy;
