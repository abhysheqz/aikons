import React from "react";
const Cos: React.FC<
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
        d="M9.5 9.5a2.5 2.5 0 0 1 5 0v5a2.5 2.5 0 0 1-5 0zM7 8.314C6.55 7.532 5.67 7 4.659 7 3.19 7 2 8.12 2 9.5v5C2 15.88 3.19 17 4.659 17 5.67 17 6.55 16.468 7 15.686M21.5 8.5A2.19 2.19 0 0 0 19.419 7h-.094A2.325 2.325 0 0 0 17 9.325V9.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 1 2.5 2.5v.175A2.325 2.325 0 0 1 19.675 17h-.094a2.19 2.19 0 0 1-2.081-1.5"
      />
    </svg>
  );
};
export default Cos;
