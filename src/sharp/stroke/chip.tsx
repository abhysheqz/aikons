import React from "react";
const Chip: React.FC<
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
        strokeWidth={1.5}
        d="M19.5 4.5h-15v15h15z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.5 7.5h-9v9H14l2.5-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2v2.5M16 2v2.5M12 2v2.5m-4 15V22m4-2.5V22m4-2.5V22m6-6h-2.5m-15-8H2m2.5 8H2m2.5-4H2m20-4h-2.5m2.5 4h-2.5"
      />
    </svg>
  );
};
export default Chip;
