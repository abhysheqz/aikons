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
        fill="currentColor"
        fillRule="evenodd"
        d="M15 20.998v-3h2v3zm6-4h-3v-2h3zM9 2.998v3H7v-3zm-6 4h3v2H3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.6 10.999a2.7 2.7 0 0 0-2.006 4.506L2 19.1l2.9 2.9 3.594-3.593a2.7 2.7 0 1 0 1.806-4.707 2.7 2.7 0 0 0-2.7-2.7M16.4 13a2.7 2.7 0 0 0 2.007-4.507L22.001 4.9 19.1 1.999l-3.594 3.594A2.7 2.7 0 1 0 13.7 10.3a2.7 2.7 0 0 0 2.7 2.7"
      />
    </svg>
  );
};
export default Bone_02;
