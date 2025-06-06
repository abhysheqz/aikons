import React from "react";
const MoonAngledRainZap: React.FC<
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
        d="M9.079 15 7 18.5h3L7.922 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 19 15 22M13.5 19 12 22M17.478 10.9h.022c2.485 0 4.5 1.982 4.5 4.426 0 1.927-1.252 3.566-3 4.174m-1.522-8.6q.021-.242.022-.491C17.5 7.422 15.038 5 12 5 9.123 5 6.762 7.172 6.52 9.94m10.958.96a5.34 5.34 0 0 1-1.235 2.951M6.52 9.94C3.984 10.177 2 12.278 2 14.835c0 1.608.786 3.037 2 3.934m2.52-8.83q.237-.021.48-.022c1.126 0 2.165.366 3 .984"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5.148a4.1 4.1 0 0 0-.466-1.257A4.03 4.03 0 0 0 7.136 2c.15 1.23-.42 2.49-1.547 3.148a3.11 3.11 0 0 1-3.465-.217c-.249.997-.13 2.089.418 3.05A4.03 4.03 0 0 0 5.589 10"
      />
    </svg>
  );
};
export default MoonAngledRainZap;
