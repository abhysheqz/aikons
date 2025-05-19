import React from "react";
const Centralized: React.FC<
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
        d="M17.75 12a5.75 5.75 0 1 1-11.5 0 5.75 5.75 0 0 1 11.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 2.664-2.293 2.293h1.586v2h-5v-5h2v1.586l2.293-2.293zM2.664 1.25l2.293 2.293V1.957h2v5h-5v-2h1.585L1.25 2.664zM1.957 17.043h5v5h-2v-1.586L2.664 22.75 1.25 21.336l2.293-2.293H1.957zM17.043 17.043h5v2h-1.586l2.293 2.293-1.415 1.415-2.292-2.294v1.586h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Centralized;
