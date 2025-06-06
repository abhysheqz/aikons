import React from "react";
const TokenCircle: React.FC<
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
        d="M11.538 7.253a.547.547 0 0 1 .924 0l.622.978a8.76 8.76 0 0 0 2.685 2.685l.978.622a.547.547 0 0 1 0 .924l-.978.622a8.76 8.76 0 0 0-2.685 2.685l-.622.978a.547.547 0 0 1-.924 0l-.622-.978a8.76 8.76 0 0 0-2.685-2.685l-.978-.622a.547.547 0 0 1 0-.924l.978-.622a8.76 8.76 0 0 0 2.685-2.685z"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default TokenCircle;
