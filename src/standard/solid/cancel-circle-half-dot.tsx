import React from "react";
const CancelCircleHalfDot: React.FC<
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
        d="M9.475 2.324a.977.977 0 0 1-.504 1.287 10.4 10.4 0 0 0-2.075 1.211.977.977 0 1 1-1.174-1.562 12.3 12.3 0 0 1 2.466-1.44.977.977 0 0 1 1.287.504M4.628 5.528a.977.977 0 0 1 .194 1.368c-.48.639-.887 1.334-1.21 2.075a.977.977 0 1 1-1.792-.783c.385-.88.87-1.708 1.44-2.466a.977.977 0 0 1 1.368-.194"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 2.227c0-.54.437-.977.977-.977 5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.977.977 0 0 1 1.955 0A8.795 8.795 0 1 0 12 3.204a.977.977 0 0 1-.977-.977"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.293 8.293a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 1 1-1.415 1.414L12 13.415l-2.292 2.292a1 1 0 0 1-1.415-1.414L10.587 12 8.293 9.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CancelCircleHalfDot;
