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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.744 7.006A2.256 2.256 0 0 1 12.257 7l.008 4.249h3.234a3.25 3.25 0 0 1 3.251 3.259l-.012 4.5a3.25 3.25 0 0 1-3.252 3.241H9.595c-.943 0-1.82-.482-2.324-1.278l-3.545-5.593a2.49 2.49 0 0 1 .01-2.942c.803-1.075 2.315-1.24 3.31-.326l.006.006.692.65z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 6a4.25 4.25 0 1 1 6.44 3.642.75.75 0 0 1-.773-1.284 2.75 2.75 0 1 0-2.833 0 .75.75 0 1 1-.775 1.284A4.25 4.25 0 0 1 5.75 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.977 2.892a.75.75 0 0 1 1.06.015l2.5 2.57a.75.75 0 0 1-.014 1.06l-2.5 2.43a.75.75 0 1 1-1.046-1.075l1.175-1.142H13.5a.75.75 0 0 1 0-1.5h4.724l-1.262-1.297a.75.75 0 0 1 .015-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragRight_02;
