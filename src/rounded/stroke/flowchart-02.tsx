import React from "react";
const Flowchart_02: React.FC<
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
        d="M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 6v4m-4 2H8c-1.886 0-2.828 0-3.414.586S4 14.114 4 16v2m2 2h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 4c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2ZM10 12c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2ZM10 20c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12c1.886 0 2.828 0 3.414-.586S22 9.886 22 8s0-2.828-.586-3.414S19.886 4 18 4"
      />
    </svg>
  );
};
export default Flowchart_02;
