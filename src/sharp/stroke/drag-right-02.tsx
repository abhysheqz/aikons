import React from "react";
const DragRight_02: React.FC<
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
        d="m6.54 13.692 1.965 1.72V6.54a1.5 1.5 0 0 1 3-.002l.003 5.501h3.994A2.5 2.5 0 0 1 18 14.54v5a2.5 2.5 0 0 1-2.5 2.5H9.006l-4.654-6.184a1.574 1.574 0 0 1-.007-1.954 1.52 1.52 0 0 1 2.196-.21Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.942 9.54a4 4 0 0 0 2.06-3.5 3.999 3.999 0 1 0-5.934 3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.967 6.049h5.85m-2.811-3.006 3.006 2.984-2.992 3.005"
      />
    </svg>
  );
};
export default DragRight_02;
