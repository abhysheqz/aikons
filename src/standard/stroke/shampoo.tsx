import React from "react";
const Shampoo: React.FC<
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
        d="M17 21v-8a5 5 0 0 0-10 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M12 5V2m0 0H9m3 0h3.5L17 3.5M7 13h9.524"
      />
    </svg>
  );
};
export default Shampoo;
