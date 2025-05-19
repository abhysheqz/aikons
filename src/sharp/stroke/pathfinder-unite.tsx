import React from "react";
const PathfinderUnite: React.FC<
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
        d="M14.991 2H2.108a.01.01 0 0 0-.01.01l-.096 12.95q0 .01.01.01l7.04-.01L9 21.99q.001.009.01.01h12.98a.01.01 0 0 0 .01-.01V9.04a.01.01 0 0 0-.01-.01H15V2.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default PathfinderUnite;
