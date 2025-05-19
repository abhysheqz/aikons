import React from "react";
const Ranking: React.FC<
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
        d="M3 22v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6M15 22v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4M9 22v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.219 10 12 8.545 14.781 10l-.621-2.922 2.34-2.022-3.165-.351L12 2l-1.335 2.705-3.165.35 2.34 2.023z"
      />
    </svg>
  );
};
export default Ranking;
