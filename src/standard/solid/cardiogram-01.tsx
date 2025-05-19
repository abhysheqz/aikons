import React from "react";
const Cardiogram_01: React.FC<
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
        d="M5.004 1.75a3.75 3.75 0 0 0-3.75 3.753l.008 8.923H22.75V5.5A3.75 3.75 0 0 0 19 1.75zM22.75 15.926H1.261l-.004 2.567a3.75 3.75 0 0 0 3.75 3.757H19a3.75 3.75 0 0 0 3.75-3.751zM5.012 18.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M9 18.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m4.768-12.14a1 1 0 0 0-1.616.11l-1.834 2.934-1.61-1.611A1 1 0 0 0 8 7.5H7a1 1 0 0 0 0 2h.586l2.207 2.207a1 1 0 0 0 1.555-.177l1.768-2.829 1.616 1.94A1 1 0 0 0 15.5 11H17a1 1 0 1 0 0-2h-1.032z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cardiogram_01;
