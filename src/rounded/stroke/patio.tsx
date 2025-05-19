import React from "react";
const Patio: React.FC<
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
        d="M22 16c-.306-.613-.933-1-1.618-1H3.618c-.685 0-1.312.387-1.618 1M3 22h18M5 15v7m4.5-7v7m5-7v7m4.5-7v7M12 7l3-4m-3 4H6.5M12 7h5.5M12 7 9 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8a6 6 0 1 1 12 0v7H6z"
      />
    </svg>
  );
};
export default Patio;
