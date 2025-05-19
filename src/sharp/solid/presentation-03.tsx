import React from "react";
const Presentation_03: React.FC<
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
        d="M22 3.25H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 2a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 17.958V15.75h2v2.208a2.5 2.5 0 1 1-2 0m1 1.792a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_03;
