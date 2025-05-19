import React from "react";
const Adzan: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15.601v3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 12v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 14.5 1-1m-1 4 1 1M4 14.5l-1-1m1 4-1 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.445 3.807C10.07 3.39 11.064 2.866 12 2c.936.866 1.93 1.389 2.556 1.807C20.786 7.547 17.897 11 17.395 12H6.605C6.103 11 3.214 7.547 9.445 3.807Z"
      />
    </svg>
  );
};
export default Adzan;
