import React from "react";
const RightAngle: React.FC<
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
        d="M2 5.707 5.707 2l3.707 3.707L8 7.121 6.707 5.828V11H13v6.293h5.172L16.879 16l1.414-1.414L22 18.293 18.293 22l-1.414-1.414 1.293-1.293H4.707V5.828L3.414 7.121z"
      />
    </svg>
  );
};
export default RightAngle;
