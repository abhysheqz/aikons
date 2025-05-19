import React from "react";
const Cancel_02: React.FC<
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
        d="M17.161 3.25c.2 0 .39.079.53.22l2.84 2.84a.75.75 0 0 1 0 1.06l-4.622 4.634L7.39 20.53a.75.75 0 0 1-1.06 0l-2.84-2.84a.75.75 0 0 1 0-1.06L16.63 3.47a.75.75 0 0 1 .531-.22"
      />
      <path
        fill="currentColor"
        d="M20.514 16.629a.75.75 0 0 1-.002 1.06l-2.838 2.84a.75.75 0 0 1-1.062-.002L3.471 7.382a.75.75 0 0 1-.001-1.061l2.838-2.84a.75.75 0 0 1 1.06-.002z"
      />
    </svg>
  );
};
export default Cancel_02;
