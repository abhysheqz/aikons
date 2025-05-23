import React from "react";
const KnifeBread: React.FC<
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
        strokeWidth={1.5}
        d="m5.715 20.204 3.659-4.443a1 1 0 0 1 1.391-.15l1.739 1.372L15.5 14l.5-2h2V9.5h2l.5-2.5 1.996-.495c.004-1.005-.602-1.693-.854-2.052-2.15-2.345-4.735-1.375-5.796-.418L3.019 17.92c-.71.73-.674 1.765.001 2.529.771.872 1.94.642 2.695-.245Z"
      />
    </svg>
  );
};
export default KnifeBread;
