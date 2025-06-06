import React from "react";
const Bone_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.992 17.983v1.998m2.001-3.997h2M7.986 5.992V3.993m-2 3.997H3.983M15.5 9a2.5 2.5 0 0 1-1.436.936M19 2l-3.732 3.732a2.5 2.5 0 1 0-1.204 4.204M22 5l-3.732 3.732a2.5 2.5 0 1 1-4.204 1.204M5 22l3.732-3.732a2.5 2.5 0 1 0 1.204-4.204M2 19l3.732-3.732a2.5 2.5 0 1 1 4.204-1.204m0 0A2.5 2.5 0 0 0 8.5 15"
      />
    </svg>
  );
};
export default Bone_02;
