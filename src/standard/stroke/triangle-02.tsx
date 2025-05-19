import React from "react";
const Triangle_02: React.FC<
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
        d="m5 10 3.5 2.5M19 10l-3.5 2.5M8.5 8l2.636-4.52a1 1 0 0 1 1.728 0L15.5 8M5 14l-2.276 4.553A1 1 0 0 0 3.618 20H8.5M19 14l2.276 4.553A1 1 0 0 1 20.382 20H15.5M12 18v4"
      />
    </svg>
  );
};
export default Triangle_02;
