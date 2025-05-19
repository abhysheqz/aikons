import React from "react";
const QuoteDown: React.FC<
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
        d="M10 8c0 1.886 0 2.828-.586 3.414S7.886 12 6 12s-2.828 0-3.414-.586S2 9.886 2 8s0-2.828.586-3.414S4.114 4 6 4s2.828 0 3.414.586S10 6.114 10 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 7v4.482c0 3.973-2.516 7.342-6 8.518"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 8c0 1.886 0 2.828-.586 3.414S19.886 12 18 12s-2.828 0-3.414-.586S14 9.886 14 8s0-2.828.586-3.414S16.114 4 18 4s2.828 0 3.414.586S22 6.114 22 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 7v4.482c0 3.973-2.516 7.342-6 8.518"
      />
    </svg>
  );
};
export default QuoteDown;
