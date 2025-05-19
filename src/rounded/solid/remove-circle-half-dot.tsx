import React from "react";
const RemoveCircleHalfDot: React.FC<
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
        d="M17 12a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 2.227c0-.54.437-.977.977-.977 5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.977.977 0 0 1 1.955 0A8.795 8.795 0 1 0 12 3.205a.977.977 0 0 1-.977-.978"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.475 2.325a.977.977 0 0 1-.504 1.286c-.74.324-1.436.731-2.075 1.211A.977.977 0 0 1 5.722 3.26a12.3 12.3 0 0 1 2.466-1.44.977.977 0 0 1 1.287.505M4.628 5.528a.977.977 0 0 1 .194 1.368c-.48.639-.887 1.334-1.21 2.075a.977.977 0 0 1-1.792-.783c.385-.88.87-1.707 1.44-2.466a.977.977 0 0 1 1.368-.194"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveCircleHalfDot;
