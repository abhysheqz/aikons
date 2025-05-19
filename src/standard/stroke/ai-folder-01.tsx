import React from "react";
const AiFolder_01: React.FC<
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
        d="m18 21-2-2v-2m1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 21v-5m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 21l2-2v-2m-1 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0M11 5.5 9.576 3.008A2 2 0 0 0 7.839 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2m7-12.5H7.5m3.5 0h9a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2"
      />
    </svg>
  );
};
export default AiFolder_01;
