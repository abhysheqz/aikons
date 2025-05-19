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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v20M15 15l6.385 2.736M9 15l-6.385 2.736M12 2 2 18l10 4 10-4z"
      />
    </svg>
  );
};
export default Pyramid;
