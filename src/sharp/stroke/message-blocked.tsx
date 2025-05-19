import React from "react";
const MessageBlocked: React.FC<
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
        d="m2 3 20 19.994M4.748 4.77c-1.996 1.788-2.746 4.455-2.746 7.299 0 1.704.348 3.79 1.602 5.428l-1.588 3.976a.01.01 0 0 0 .013.014l4.555-1.461c1.501.83 3.204 1.012 5.09 1.012 3.05.214 5.512-.6 7.265-2.037M6.02 3.85c1.398-.804 3.221-1.29 5.556-1.332 8.337-.388 10.527 4.834 10.42 9.788 0 2.093-.674 4.05-1.939 5.58"
      />
    </svg>
  );
};
export default MessageBlocked;
