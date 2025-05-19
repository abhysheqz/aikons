import React from "react";
const Prisoner: React.FC<
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
        d="M18.97 7H4.996M16.974 7v2c0 2.761-2.235 5-4.991 5A4.996 4.996 0 0 1 6.99 9V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.991 8V5.956c0-1.345.92-2.591 2.424-3.283l.513-.236c1.265-.582 2.845-.582 4.11 0l.513.236c1.503.692 2.423 1.938 2.423 3.283V8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.988 13.001v3.044m0 0 2.994 1.964 2.992-2.01m-5.986.046-6.66 1.862a.5.5 0 0 0-.365.481v3.613M14.974 16v-3.004m0 3.004 6.627 1.905a.5.5 0 0 1 .36.48v3.616"
      />
    </svg>
  );
};
export default Prisoner;
