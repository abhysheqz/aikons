import React from "react";
const ArrowReloadVertical: React.FC<
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
        d="M10.01 6.514 6.497 3 3 6.514m7.99 12.5H6.617c-.055 0-.12-.046-.12-.101V3.455M13.991 17.485 17.505 21 21 17.485m-7.991-12.5h4.376c.055 0 .119.046.119.102v15.457"
      />
    </svg>
  );
};
export default ArrowReloadVertical;
