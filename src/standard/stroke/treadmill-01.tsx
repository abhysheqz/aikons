import React from "react";
const Treadmill_01: React.FC<
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
        d="M20.191 20.5H2.931c-.578 0-.895-.479-.928-.985-.032-.493.204-1.012.73-1.14l15.215-3.77c4.257-1.037 5.416 5.895 2.243 5.895Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 17.5h.009M21.5 2.5l-1.144 2.287a2 2 0 0 1-1.105.985L14.5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 15.5 19 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 20.5-1 1M18 20.5v1"
      />
    </svg>
  );
};
export default Treadmill_01;
