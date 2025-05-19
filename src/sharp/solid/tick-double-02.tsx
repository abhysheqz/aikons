import React from "react";
const TickDouble_02: React.FC<
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
        fillRule="evenodd"
        d="m17.196 6.935-6.5 6.617-1.446-1.38 6.5-6.618zM1.75 14.076l1.447-1.38 2.776 2.908.301-.315 1.447 1.38L5.973 18.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 6.881 10.972 18.5 6.75 14.076l1.447-1.381 2.776 2.908L20.802 5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_02;
