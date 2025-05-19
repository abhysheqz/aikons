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
        d="M12 2C9.004 2 6.317 4.749 7.156 7.783 7.389 8.627 6 8.963 6 9.873c0 2.71 4.5-.036 4.5 2.914 0 1.617 2.5 1.617 2.5 0 0-3.16 5 .037 5-2.914 0-.91-1.39-1.246-1.156-2.09C17.683 4.75 14.996 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 11 .827 2.965C9.82 19.322 10.567 22 12 22s2.18-2.678 3.673-8.035L16.5 11"
      />
    </svg>
  );
};
export default IceCream_03;
