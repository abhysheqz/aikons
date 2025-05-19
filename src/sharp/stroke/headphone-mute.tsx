import React from "react";
const HeadphoneMute: React.FC<
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
        d="m2 2 20 20M7 13.5v6l-2 1c-1.673-1.452-2.51-2.178-2.815-2.979A2.7 2.7 0 0 1 2 16.5a2.7 2.7 0 0 1 .185-1.021c.306-.8 1.142-1.527 2.814-2.979z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 12.5-2 1m2-1c1.673 1.453 2.51 2.179 2.816 2.98.128.335.19.678.184 1.02a2.7 2.7 0 0 1-.184 1.021 2.5 2.5 0 0 1-.277.518M19.001 12.5l-.001-2A7 7 0 0 0 8.152 4.652M5 12.5v-2c0-1.55.504-2.983 1.357-4.143"
      />
    </svg>
  );
};
export default HeadphoneMute;
