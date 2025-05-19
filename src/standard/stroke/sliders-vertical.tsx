import React from "react";
const SlidersVertical: React.FC<
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
        d="M5 4v7M5 14v6M2 14h6M12 4v4M19 4v8M12 11v9M19 15v5M9 8h6M16 12h6"
      />
    </svg>
  );
};
export default SlidersVertical;
