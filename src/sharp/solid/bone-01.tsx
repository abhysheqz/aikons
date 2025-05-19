import React from "react";
const Bone_01: React.FC<
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
        d="M16 2a3 3 0 0 0-2.23 5.007L7.007 13.77A3 3 0 1 0 5 19a3 3 0 1 0 5.23-2.007l6.763-6.763A3 3 0 1 0 19 5a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default Bone_01;
