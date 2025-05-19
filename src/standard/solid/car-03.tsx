import React from "react";
const Car_03: React.FC<
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
      <circle cx={7} cy={16.875} r={2.5} fill="currentColor" />
      <circle cx={17} cy={16.875} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 11a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 5.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 9 5.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 4.875a.75.75 0 0 1 .75-.75h11.459a2.75 2.75 0 0 1 2.253 1.173l2.793 3.991 2.725 1.362a2.75 2.75 0 0 1 1.52 2.46v2.764a1.75 1.75 0 0 1-1.75 1.75h-.274q.074-.364.074-.75a3.8 3.8 0 1 0-7.526.75h-2.548q.073-.364.074-.75a3.8 3.8 0 1 0-7.573.452l-1.01-.505a1.75 1.75 0 0 1-.967-1.565V9.375a.75.75 0 0 1 .065-.305l1.53-3.445H2a.75.75 0 0 1-.75-.75m3.237.75-1.555 3.5H8.25v-3.5zm5.263 0v3.5h6.81l-2.077-2.967a1.25 1.25 0 0 0-1.024-.533z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Car_03;
