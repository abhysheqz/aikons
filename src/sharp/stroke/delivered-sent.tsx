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
        strokeWidth={1.5}
        d="M19 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8.998 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10v8.983h3M12 5.5h2.5v7H22v6.483L19 19m-10-.017h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 7.5H19l3 5M6 9l3-3-3-3M2 6h6.593"
      />
    </svg>
  );
};
export default DeliveredSent;
