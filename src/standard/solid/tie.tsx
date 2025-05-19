import React from "react";
const Tie: React.FC<
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
        d="M11.762 1.288a.75.75 0 0 1 .474 0l3.295 1.099a1.75 1.75 0 0 1 .931 2.588l-1.827 2.923a.75.75 0 0 1-.454.33l-2 .5a.75.75 0 0 1-.364 0l-2-.5a.75.75 0 0 1-.454-.33L7.536 4.975a1.75 1.75 0 0 1 .931-2.588z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.866 9.443 6.92 17.231a1.75 1.75 0 0 0 .536 1.732l3.383 3.007a1.75 1.75 0 0 0 2.325 0l3.383-3.007a1.75 1.75 0 0 0 .535-1.733l-1.947-7.787q-.275.161-.588.24l-2 .5a2.25 2.25 0 0 1-1.091 0l-2-.5a2.3 2.3 0 0 1-.589-.24"
      />
    </svg>
  );
};
export default Tie;
