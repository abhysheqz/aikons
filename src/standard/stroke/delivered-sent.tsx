import React from "react";
const DeliveredSent: React.FC<
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
        d="M6.5 8 9 5.5 6.5 3m-4 2.5h5.891"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8.998 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 7.5h3.368c.553 0 .83 0 1.059.13s.371.367.656.841L22 12.501"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5h1.5a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1H22V19h-3m-4 0H9m-4 0H3a1 1 0 0 1-1-1v-8"
      />
    </svg>
  );
};
export default DeliveredSent;
