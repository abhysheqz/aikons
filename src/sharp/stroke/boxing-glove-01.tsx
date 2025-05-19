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
        d="M6 11.709c0 2.8 3 6.067 6 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.573 13.807c0-1.008.38-1.722 1.833-2.41.383-.181.762-.385 1.066-.68.938-.912 1.194-1.712.94-2.99a2.7 2.7 0 0 0-.396-.955 9.56 9.56 0 0 0-5.018-3.81c-1.674-.414-2.689-.328-4.048.234-1.304.668-2.76 1.889-3.998 4.011C7.074 8.96 6.69 9.945 6.02 11.712l-3.515 3.002c.068 2.81 2.42 6.033 5.498 6.992l3.988-2.995c3.23-.954 6.67-1.558 7.973-2.337s1.906-3.387-.031-4.817"
      />
    </svg>
  );
};
export default BoxingGlove_01;
