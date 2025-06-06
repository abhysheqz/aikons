import React from "react";
const Validation: React.FC<
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
        strokeWidth={1.5}
        d="m6.25 14.75 2 2 3.5-4M15.25 6.75l-2.71-1.355a2 2 0 0 0-2.31.374l-.444.446a.05.05 0 0 0 0 .07l7.929 7.93c.019.02.05.02.07 0l.446-.446a2 2 0 0 0 .374-2.309L17.25 8.75m-2-2 2 2m-2-2s.843-1.291 1.292-2.439c.283-.594.569-1.165 1.145-1.574.762-.608 2.371-.836 3.487.455.252.382.924 1.206.35 2.722-.208.437-.777 1.004-1.242 1.237-.5.25-1.163.48-1.88.978l-1.152.621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.85 7.75a7.077 7.077 0 1 0 8.401 8.401"
      />
    </svg>
  );
};
export default Validation;
