import React from "react";
const QuoteUp: React.FC<
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
        d="M14 16c0-1.886 0-2.828.586-3.414S16.114 12 18 12s2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20s-2.828 0-3.414-.586S14 17.886 14 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 16v-4.137C14 8.196 16.516 5.086 20 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12s2.828 0 3.414.586S10 14.114 10 16s0 2.828-.586 3.414S7.886 20 6 20s-2.828 0-3.414-.586S2 17.886 2 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 16v-4.137C2 8.196 4.516 5.086 8 4"
      />
    </svg>
  );
};
export default QuoteUp;
