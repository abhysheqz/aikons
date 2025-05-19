import React from "react";
const IceCream_03: React.FC<
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
        d="M12 2a5 5 0 0 0-4.717 6.662C6.485 9.017 6 9.486 6 10c0 1.037 1.973 1.449 4.5 1.495V12.5a1.5 1.5 0 0 0 3 0v-1.005C16.027 11.45 18 11.038 18 10c0-.514-.485-.983-1.283-1.338A5 5 0 0 0 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 11 12 22l4.5-11"
      />
    </svg>
  );
};
export default IceCream_03;
