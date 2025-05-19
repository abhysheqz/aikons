import React from "react";
const HandGrip: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 20.062C20.28 18.814 18.5 15 18 11l-4 1.5s2 2 1 4c2 1.5 1.13 3.822 1.13 3.822 1.035 1.774 3.37 2.76 5.87-.26ZM2.001 20.062c1.719-1.248 3.5-5.062 4-9.062l4 1.5s-2 2-1 4c-2 1.5-1.13 3.822-1.13 3.822-1.036 1.774-3.37 2.76-5.87-.26ZM9.5 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM8.5 11.5 10 6M15.5 11.5l-.75-2.75"
      />
    </svg>
  );
};
export default HandGrip;
