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
        d="M13.82 2.259a3.445 3.445 0 0 1 5.86 2.06 3.445 3.445 0 1 1-1.945 6.492c-.097-.048-.315-.121-.4-.036l-6.56 6.56c-.095.095-.016.307.036.4a3.446 3.446 0 1 1-6.492 1.946 3.445 3.445 0 1 1 1.945-6.492c.1.046.32.118.401.036l6.56-6.56c.085-.085.012-.303-.036-.4a3.45 3.45 0 0 1 .632-4.006"
      />
    </svg>
  );
};
export default Bone_01;
