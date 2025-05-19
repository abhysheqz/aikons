import React from "react";
const SpeedTrain_02: React.FC<
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
        d="M1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 3a1 1 0 0 1 1-1h7.333a9 9 0 0 1 5.4 1.8L18 6.25h-8a.75.75 0 0 0 0 1.5h10l.6.45A6 6 0 0 1 23 13a3 3 0 0 1-3 3h-1.54l-.05-.044-6.122-4.887a3.75 3.75 0 0 0-2.34-.82H1z"
      />
      <path
        fill="currentColor"
        d="M11.352 12.241 16.061 16H2a1 1 0 0 1-1-1v-3.25h8.949c.51 0 1.005.173 1.403.491"
      />
    </svg>
  );
};
export default SpeedTrain_02;
