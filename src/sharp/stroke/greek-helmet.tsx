import React from "react";
const GreekHelmet: React.FC<
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
        strokeWidth={1.5}
        d="M9 14c-2 0-3.167 3.63-3 5a9.86 9.86 0 0 1-3-7.09C3 6.764 7 2 13 2v2.962l3.076-2.392C18.5 3 19.974 4.6 21 5.955c0 0-3.5.533-4 2.978"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.385 13.5c0-4-2.607-5.5-5.884-5.5-4.594 0-6.993 5.5-4.495 10l-1 4 7.56-1.971L21 22l-.615-4.775c-1.194-.25-2.383-.225-3.82-1.725.937-2 3.106-1.932 3.82-2Z"
      />
    </svg>
  );
};
export default GreekHelmet;
