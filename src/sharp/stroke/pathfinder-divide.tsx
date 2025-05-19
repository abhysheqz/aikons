import React from "react";
const PathfinderDivide: React.FC<
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
        d="M15.013 2.046H2.13a.01.01 0 0 0-.01.01l-.097 12.95q.001.009.01.01h12.99V2.056a.01.01 0 0 0-.01-.01Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.013 9.075H9.12l-.097 12.96q.001.01.01.01h12.98a.01.01 0 0 0 .01-.01V9.085a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default PathfinderDivide;
