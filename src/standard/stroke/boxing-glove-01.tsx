import React from "react";
const BoxingGlove_01: React.FC<
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
        d="M5.996 11.506c0 2.8 3 6.067 6 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.57 13.602c0-1.008.38-1.722 1.832-2.41.383-.181.762-.385 1.066-.68.938-.912 1.194-1.712.94-2.99a2.7 2.7 0 0 0-.396-.955 9.56 9.56 0 0 0-5.018-3.81c-1.674-.414-2.689-.328-4.048.234-1.304.668-2.76 1.889-3.998 4.011-.878 1.751-1.262 2.738-1.933 4.505l-2.791 2.384c-.458.39-.734.971-.62 1.563.435 2.247 2.165 4.567 4.443 5.67.579.28 1.256.148 1.77-.238l3.169-2.38c3.23-.954 6.67-1.558 7.973-2.337s1.906-3.387-.031-4.817"
      />
    </svg>
  );
};
export default BoxingGlove_01;
