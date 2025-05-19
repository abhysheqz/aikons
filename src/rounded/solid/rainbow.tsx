import React from "react";
const Rainbow: React.FC<
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
        d="M10.25 18.333c0-1.594 1.11-2.91 2.588-3.299.414-1.613 1.91-2.784 3.662-2.784 1.926 0 3.547 1.42 3.753 3.281 1.418.32 2.497 1.558 2.497 3.069 0 1.761-1.466 3.15-3.225 3.15H13.75c-1.911 0-3.5-1.508-3.5-3.417M1.25 12a8.75 8.75 0 0 1 17.38-1.45c.048.287.072.431-.012.505-.084.073-.236.026-.542-.068a5.4 5.4 0 0 0-1.576-.237q-.431 0-.867.088A5.75 5.75 0 0 0 4.25 12v3.75H1.999a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M5.75 15.75H8a.75.75 0 0 0 .75-.75v-3a1.25 1.25 0 1 1 2.5 0v.278c0 .705 0 1.058.122 1.11.122.051.396-.215.944-.748a7.3 7.3 0 0 1 1.88-1.314A4.251 4.251 0 0 0 5.75 12z"
      />
    </svg>
  );
};
export default Rainbow;
