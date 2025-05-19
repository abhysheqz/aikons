import React from "react";
const Knowledge_01: React.FC<
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
        d="M12.498 6c0-4 4-4 4-4s0 4-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.997 6.917S6 3.855 6 8.9c0 5.047 2.729 7.084 3.816 7.084.868 0 1.38-1.008 2.181-1.008s1.09 1.008 2.181 1.008c1.088 0 3.816-2.037 3.816-7.084s-5.997-1.984-5.997-1.984Zm0 0C11.997 3.999 9 3 9 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.528 21.997H3.01a.01.01 0 0 1-.01-.01v-5.978a.01.01 0 0 1 .01-.01h15.472m.046 5.998h2.44m-2.44 0-.046-5.998m2.518 0h-2.518"
      />
    </svg>
  );
};
export default Knowledge_01;
