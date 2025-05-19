import React from "react";
const EiffelTower: React.FC<
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
        d="M3 22c5.263-5.614 6.887-13.108 7.875-18h2.25c.988 4.892 2.612 12.386 7.875 18M12 2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 22c.728-2.33 2.692-4 5-4s4.272 1.67 5 4M7.5 11h9M6 15h12"
      />
    </svg>
  );
};
export default EiffelTower;
