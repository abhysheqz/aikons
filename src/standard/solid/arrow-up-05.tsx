import React from "react";
const ArrowUp_05: React.FC<
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
        d="M5 4a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1M12 11a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6a1 1 0 0 1 .78.375l4.001 5a1 1 0 0 1-.78 1.625H8a1 1 0 0 1-.782-1.625l4-5A1 1 0 0 1 12 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUp_05;
