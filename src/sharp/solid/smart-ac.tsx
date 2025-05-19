import React from "react";
const SmartAc: React.FC<
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
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM18 13.25H6v-1.5h12zm1.009-6.75H17v2h2.009z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 17.25v4h2v-4zM11 21.25v-4h2v4zM16 21.25v-4h2v4z"
      />
    </svg>
  );
};
export default SmartAc;
