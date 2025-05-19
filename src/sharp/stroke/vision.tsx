import React from "react";
const Vision: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 8.187 2.502 2.5h5.687M21.5 8.187V2.5h-5.687m0 19h5.687v-5.687M8.188 21.5H2.5v-5.687"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 7c4.418 0 8 5 8 5s-3.582 5-8 5-8-5-8-5 3.582-5 8-5Z"
      />
    </svg>
  );
};
export default Vision;
