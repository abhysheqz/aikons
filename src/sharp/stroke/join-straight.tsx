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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.975 1.97H2.022a.01.01 0 0 0-.01.01v19.98q0 .009.01.01h19.985a.01.01 0 0 0 .01-.01v-8.984a.01.01 0 0 0-.01-.01H10.985V1.981a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default JoinStraight;
