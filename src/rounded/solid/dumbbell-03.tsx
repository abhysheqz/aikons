import React from "react";
const Dumbbell_03: React.FC<
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
        d="M6 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M6 13a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.98 5.385c-2.64-1.18-5.32-1.18-7.96 0a1.2 1.2 0 0 1-.492.115H6a1 1 0 0 0 0 2h1.528a3.2 3.2 0 0 0 1.307-.289c2.122-.948 4.208-.948 6.33 0 .39.174.834.289 1.307.289H18a1 1 0 1 0 0-2h-1.528c-.148 0-.315-.036-.491-.115M2 5.5a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zm18.5 0a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2zM15.98 16.385c-2.64-1.18-5.32-1.18-7.96 0a1.2 1.2 0 0 1-.492.115H6a1 1 0 1 0 0 2h1.528c.473 0 .916-.115 1.307-.289 2.122-.948 4.208-.948 6.33 0 .39.174.834.289 1.307.289H18a1 1 0 1 0 0-2h-1.528c-.148 0-.315-.036-.491-.115M2 16.5a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2zm18.5 0a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 3.5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M3.5 14.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dumbbell_03;
