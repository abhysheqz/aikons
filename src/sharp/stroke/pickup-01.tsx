import React from "react";
const Pickup_01: React.FC<
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
        d="m12 4 4.5 7H22M22 14h-2M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 17h2.99a.01.01 0 0 0 .01-.01v-5.986l-.002-.007-5.995-6.994L15.995 4H12.01a.01.01 0 0 0-.01.01V11m0 0H2.01a.01.01 0 0 0-.01.01v5.98q0 .01.01.01H5m7-6v6m0 0h3m-3 0H9"
      />
    </svg>
  );
};
export default Pickup_01;
