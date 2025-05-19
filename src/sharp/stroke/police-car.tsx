import React from "react";
const PoliceCar: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14.5h3M22 14.5h-3M8 18.5l1.5-3h5l1.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 18.5v3h4.5v-3M17.5 18.5v3H22v-3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 5.5v-3h5v3M19.5 11.5l2.5-2M4.5 11.5 2 9.5M4.5 11.5l1.5-6h12l1.5 6M2 18.5v-4l2.5-3h15l2.5 3v4z"
      />
    </svg>
  );
};
export default PoliceCar;
