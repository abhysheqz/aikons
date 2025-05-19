import React from "react";
const BoxingBag: React.FC<
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
        d="M18 17.5q-6 2-12 0m12-7q-6-2-12 0M16 6.5 12 2 8 6.5M18 2H6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c2.233 0 4.303-.555 6-1.5v-13C16.303 6.555 14.233 6 12 6s-4.303.555-6 1.5v13c1.697.945 3.767 1.5 6 1.5Z"
      />
    </svg>
  );
};
export default BoxingBag;
