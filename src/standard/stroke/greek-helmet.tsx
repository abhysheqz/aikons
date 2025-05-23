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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14c-2 0-3.167 3.63-3 5a9.86 9.86 0 0 1-3-7.09C3 6.764 7 2 13 2v2.962l2.289-1.878c.451-.37 1.048-.542 1.603-.36 1.922.63 3.214 2.049 4.108 3.23 0 0-3.5.534-4 2.979"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 13.5c0-3.5-2.72-5.5-5.996-5.5-4.591 0-6.997 5.5-4.5 10l-.998 4 7.496-2L21 22l-.5-5c-1 0-2.498 0-3.998-1.5 1-1.5 3.113-2 3.998-2Z"
      />
    </svg>
  );
};
export default GreekHelmet;
