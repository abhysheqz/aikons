import React from "react";
const Share_01: React.FC<
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
        d="M1.323 3.75h9.115v1.944h-7.09v13.612h14.179v-2.917h2.025v4.861H1.322z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.583 12.31h-2.27c-1.174 0-3.964 0-6.585 3.756V12.56c0-3.176 2.682-5.75 5.99-5.75h2.865V2.75l7.094 6.81-7.094 6.811z"
      />
    </svg>
  );
};
export default Share_01;
