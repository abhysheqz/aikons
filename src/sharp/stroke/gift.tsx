import React from "react";
const Gift: React.FC<
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
        d="M3.998 11v11h15.964V11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.992 3.786C5.992 2.799 6.79 2 7.774 2h.356a3.853 3.853 0 0 1 3.849 3.857V7h-2.78a3.21 3.21 0 0 1-3.207-3.214Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.967 3.786c0-.987-.798-1.786-1.782-1.786h-.356a3.853 3.853 0 0 0-3.849 3.857V7h2.78a3.21 3.21 0 0 0 3.207-3.214Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.98 11v11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.977 7.015v4.03h17.998v-4.03a.01.01 0 0 0-.01-.01H2.987a.01.01 0 0 0-.01.01Z"
      />
    </svg>
  );
};
export default Gift;
