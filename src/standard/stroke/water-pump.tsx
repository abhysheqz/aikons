import React from "react";
const WaterPump: React.FC<
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
        d="M8 21.5h7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 5.5h-6v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.988 11.5H9.992v10h2.996zM13.5 2.5H7.764a2 2 0 0 0-1.81 1.15L2.5 11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.484 2.5v3M18.556 7H14.5v2.99h3.993a.01.01 0 0 1 .01.01v2.5h2.992v-2c.118-2.68-1.91-3.45-2.94-3.5ZM20 15.5c-2.244 2.198-1.74 4 0 4s2.244-1.802 0-4Z"
      />
    </svg>
  );
};
export default WaterPump;
