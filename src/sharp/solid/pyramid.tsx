import React from "react";
const Pyramid: React.FC<
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
        d="M12.25 1a1 1 0 0 1 .848.47L22.752 17l-7.11-2.92-.785 1.84 7.238 2.974-9.473 4.035a1 1 0 0 1-.743 0l-10-4a1 1 0 0 1-.477-1.459l10-16A1 1 0 0 1 12.25 1M4.79 15.824l4.066-1.743.787 1.838-4.78 2.05 7.387 2.954V3.887z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pyramid;
