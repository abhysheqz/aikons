import React from "react";
const Figma: React.FC<
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
      <circle
        cx={15}
        cy={12}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 21a3 3 0 0 0 3-3v-3H9a3 3 0 1 0 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v6H9a3 3 0 1 1 0-6zM12 3v6H9a3 3 0 0 1 0-6zM12 3v6h3a3 3 0 1 0 0-6z"
      />
    </svg>
  );
};
export default Figma;
