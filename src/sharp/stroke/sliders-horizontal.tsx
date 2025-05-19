import React from "react";
const SlidersHorizontal: React.FC<
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
        d="M4 5h6M13 5h7M16 9v6M10 2v6M12 16v6M16 12h4M4 12h9M12 19h8M4 19h5"
      />
    </svg>
  );
};
export default SlidersHorizontal;
