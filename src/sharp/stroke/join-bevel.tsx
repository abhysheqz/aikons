import React from "react";
const JoinBevel: React.FC<
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
        d="M10.943 1.983H1.971a.01.01 0 0 0-.01.01V14.99l6.983 6.998H21.95a.01.01 0 0 0 .01-.01v-8.964a.01.01 0 0 0-.01-.01H10.953V1.994a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default JoinBevel;
