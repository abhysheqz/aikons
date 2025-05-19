import React from "react";
const SiriNew: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.78 14c-1.334 1.392-3.214 3-4.78 3A5 5 0 0 1 7 7c5.09 0 6.54 8.5 11.522 8.5C20.442 15.5 22 13.933 22 12s-1.557-3.5-3.478-3.5c-.896 0-2.047.76-3.022 1.572"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default SiriNew;
