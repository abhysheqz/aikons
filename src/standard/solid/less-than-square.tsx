import React from "react";
const LessThanSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm9.707 7.457a1 1 0 0 0-1.414-1.414l-3.5 3.5a1 1 0 0 0 0 1.414l3.5 3.5a1 1 0 0 0 1.414-1.414L11.414 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LessThanSquare;
