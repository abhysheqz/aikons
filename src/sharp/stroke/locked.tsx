import React from "react";
const Locked: React.FC<
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
        d="M9.144 2.5H2.5v6.644M14.856 2.5H21.5v6.644M14.856 21.5H21.5v-6.644M9.144 21.5H2.5v-6.644M14.488 10.526V8.89c0-1.375-1.102-2.412-2.476-2.412-1.375 0-2.5 1.037-2.5 2.412v1.636m-2.01 0h9.03v6.96h-9.03z"
      />
    </svg>
  );
};
export default Locked;
