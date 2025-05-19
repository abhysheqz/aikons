import React from "react";
const Cactus: React.FC<
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
        d="m9.49 15.002-.964-7.036c-.287-2.097 1.349-3.964 3.473-3.964 2.125 0 3.76 1.867 3.474 3.964l-.964 7.036"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.978 15.002v-3M15.012 6.502l2.008-1.5m-8.032 1.5-2.009-1.5m5.02-.5v-2.5m3.013 7.5 2.008 1.5m-8.032-1.5-2.009 1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.4 15.017H6.6a.1.1 0 0 0-.097.128l1.96 6.852h7.068l1.966-6.852a.1.1 0 0 0-.096-.128Z"
      />
    </svg>
  );
};
export default Cactus;
