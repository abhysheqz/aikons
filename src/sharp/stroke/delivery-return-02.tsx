import React from "react";
const DeliveryReturn_02: React.FC<
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
        d="M9.5 11h5M21.9 3H2.1a.1.1 0 0 0-.1.101v4.973h20V3.101A.1.1 0 0 0 21.9 3ZM20.993 8.733v4.275M3.043 8.822V21l14.272-.03c.873.06 1.689.012 2.458-.69.845-.771 1.101-2.454.017-3.482-.916-.952-1.74-.78-2.562-.78l-2.077-.013m1.828-2.514-2.485 2.51 2.498 2.503"
      />
    </svg>
  );
};
export default DeliveryReturn_02;
