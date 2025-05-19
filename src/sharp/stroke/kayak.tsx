import React from "react";
const Kayak: React.FC<
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
        strokeWidth={1.5}
        d="M20.839 3.183c-9.883-1.68-18.727 8.43-17.766 17.734 9.32.959 19.45-7.869 17.766-17.734ZM7.006 16.992h.009M17.019 6.996h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.527 14.475a1.765 1.765 0 0 1 0-2.5l2.467-2.461a1.773 1.773 0 0 1 2.504 0c.691.69.691 1.81 0 2.5l-2.467 2.461c-.691.69-1.812.69-2.504 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.057 17.975 12 11.925 6.009 5.93m12.048 12.045c-.555.534-.402 1.841.926 4.021l3.03-2.998c-1.779-1.24-3.325-1.63-3.956-1.023ZM6.01 5.93c-.535.548-1.835.388-3.997-.945l3.004-2.99c1.222 1.773 1.601 3.311.993 3.935Z"
      />
    </svg>
  );
};
export default Kayak;
