import React from "react";
const GiveBlood: React.FC<
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
        d="M12.488 2.356a.85.85 0 0 1 1.024 0C14.59 3.157 17 5.228 17 7.75c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25c0-2.522 2.41-4.593 3.488-5.394M4 14h2.486a2 2 0 0 1 .964.248l2.05 1.127h1c1.5 0 2.5 1.149 2.5 2.125l-2.684.894a1 1 0 0 1-.632 0L7 17.5m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155v0a.877.877 0 0 1-.422 1.11l-7.585 3.792a2 2 0 0 1-1.44.136L4 20.019"
      />
    </svg>
  );
};
export default GiveBlood;
