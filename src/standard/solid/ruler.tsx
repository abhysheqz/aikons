import React from "react";
const Ruler: React.FC<
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
        d="M16.796 1.858a2.93 2.93 0 0 0-4.145 0L1.858 12.651a2.93 2.93 0 0 0 0 4.145l4.846 4.846a2.93 2.93 0 0 0 4.145 0l1.366-1.366L9.72 17.78a.75.75 0 1 1 1.06-1.06l2.496 2.495 2.439-2.44-2.495-2.495a.75.75 0 1 1 1.06-1.06l2.496 2.495 2.439-2.44-2.495-2.495a.75.75 0 1 1 1.06-1.06l2.496 2.495 1.366-1.366a2.93 2.93 0 0 0 0-4.145z"
      />
    </svg>
  );
};
export default Ruler;
