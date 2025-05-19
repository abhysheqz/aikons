import React from "react";
const WorkflowSquare_01: React.FC<
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
        d="M2.008 1a1 1 0 0 1 1 1v2.5H5.25V4c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v.5H17a3 3 0 0 1 3 3v4.682q.223.128.414.318L22 14.086a2 2 0 0 1 0 2.828L20.414 18.5a2 2 0 0 1-.414.318V20a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H21a3 3 0 0 1-3-3v-1.182a2 2 0 0 1-.414-.318L16 16.914a2 2 0 0 1-.319-.414h-.931v.5A1.75 1.75 0 0 1 13 18.75H7A1.75 1.75 0 0 1 5.25 17v-.5H4.002a3 3 0 0 1-3-3.002L1.008 2a1 1 0 0 1 1-1m1 5.5H5.25V7c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 14.75 7v-.5H17a1 1 0 0 1 1 1v4.681a2 2 0 0 0-.414.319L16 14.086a2 2 0 0 0-.319.414h-.931V14A1.75 1.75 0 0 0 13 12.25H7A1.75 1.75 0 0 0 5.25 14v.5H4.002a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_01;
