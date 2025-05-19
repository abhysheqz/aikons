import React from "react";
const ArrowVertical: React.FC<
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
        d="M9 5c.59-.607 2.16-3 3-3s2.41 2.393 3 3M9 19c.59.607 2.16 3 3 3s2.41-2.393 3-3M12 2.231V21.77"
      />
    </svg>
  );
};
export default ArrowVertical;
