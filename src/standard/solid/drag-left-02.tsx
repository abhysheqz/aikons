import React from "react";
const DragLeft_02: React.FC<
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
        d="M10.744 7.006A2.256 2.256 0 0 1 15.257 7l.008 4.249h3.234a3.25 3.25 0 0 1 3.251 3.259l-.012 4.5a3.25 3.25 0 0 1-3.252 3.241h-5.891c-.943 0-1.82-.482-2.324-1.278l-3.545-5.593a2.49 2.49 0 0 1 .01-2.942c.803-1.075 2.315-1.24 3.31-.326l.006.006.692.65z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3.25a2.75 2.75 0 0 0-1.417 5.108.75.75 0 1 1-.774 1.284 4.25 4.25 0 1 1 4.382 0 .75.75 0 0 1-.774-1.284A2.75 2.75 0 0 0 13 3.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.03 2.97a.75.75 0 0 1 0 1.06L4.81 5.25H9.5a.75.75 0 0 1 0 1.5H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragLeft_02;
