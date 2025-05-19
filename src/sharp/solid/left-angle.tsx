import React from "react";
const LeftAngle: React.FC<
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
        d="M22 5.707 18.293 2l-3.707 3.707L16 7.121l1.293-1.293V11H11v6.293H5.828L7.121 16l-1.414-1.414L2 18.293 5.707 22l1.414-1.414-1.293-1.293h13.465V5.828l1.293 1.293z"
      />
    </svg>
  );
};
export default LeftAngle;
