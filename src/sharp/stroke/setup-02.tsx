import React from "react";
const Setup_02: React.FC<
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
        d="M18 13.139V10.86c-1.714 0-2.829-1.796-1.96-3.222L13.96 6.5c-.878 1.444-3.041 1.444-3.92 0L7.962 7.639C8.83 9.065 7.714 10.86 6 10.86v2.278c1.714 0 2.829 1.796 1.96 3.222l2.08 1.139c.878-1.445 3.043-1.445 3.922 0l2.078-1.139c-.868-1.426.246-3.222 1.96-3.222"
      />
      <circle
        cx={12}
        cy={12}
        r={1.75}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 2v2.859A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.422.297 2.775.832 4M5 22v-2.859A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4"
      />
    </svg>
  );
};
export default Setup_02;
