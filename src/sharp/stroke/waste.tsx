import React from "react";
const Waste: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.44}
        d="M19.989 19.004c0-1.654-1.29-2.995-2.88-2.995-1.591 0-2.88 1.34-2.88 2.995S15.518 22 17.109 22s2.88-1.341 2.88-2.996Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.449 4.987-.615 11.597M5.043 4.987 6.06 20.964a.1.1 0 0 0 .099.093H14.9M2.749 4.98H9.38m0 0L11.82 2h6.542a.1.1 0 0 1 .095.07l.884 2.91m-9.96 0h9.96m-.008-.026.008.027m0 0h2.41"
      />
    </svg>
  );
};
export default Waste;
