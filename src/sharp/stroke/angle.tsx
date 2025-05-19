import React from "react";
const Angle: React.FC<
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
        d="M12 22V2.936M22 17 12 2 2 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8c-1.145 1.263-2.52 2-4 2s-2.855-.737-4-2M12 14c-2.22 0-4.283-.737-6-2"
      />
    </svg>
  );
};
export default Angle;
