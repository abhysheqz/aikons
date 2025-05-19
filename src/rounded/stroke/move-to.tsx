import React from "react";
const MoveTo: React.FC<
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
        strokeWidth={1.5}
        d="M9 5h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5h.009M5 11.004h.009M5 17.007h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 11.004h10M9 17.007h10m0 0c.003-.26-.18-.517-.404-.707l-1.602-1.274M19 17.007c-.003.252-.186.506-.404.708L16.994 19"
      />
    </svg>
  );
};
export default MoveTo;
