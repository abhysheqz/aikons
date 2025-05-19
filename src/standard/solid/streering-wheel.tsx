import React from "react";
const StreeringWheel: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10c2.334 0 4.566.238 6.62.672a6.8 6.8 0 0 1-.384 3.916 7.76 7.76 0 0 0-3.648 3.648A6.7 6.7 0 0 1 12 18.75a6.7 6.7 0 0 1-2.588-.514 7.76 7.76 0 0 0-3.648-3.648 6.783 6.783 0 0 1-.383-3.916A32 32 0 0 1 12 10m0 2.5a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StreeringWheel;
