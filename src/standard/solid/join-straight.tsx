import React from "react";
const JoinStraight: React.FC<
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
        d="M22 14v7a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10h10a1 1 0 0 1 1 1"
      />
    </svg>
  );
};
export default JoinStraight;
