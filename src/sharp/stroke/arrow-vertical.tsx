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
        strokeWidth={1.5}
        d="m8 6 4-4 4 4M8 18l4 4 4-4M12 2.285v19.336"
      />
    </svg>
  );
};
export default ArrowVertical;
