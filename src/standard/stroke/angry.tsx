import React from "react";
const Angry: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 10c.52 0 1.747 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791ZM17 10c-.52 0-1.746 0-2.5.709m0 0c-.214.201-.5.515-.5.791a.5.5 0 0 0 1 0c-.005-.295-.333-.576-.5-.791Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2"
      />
    </svg>
  );
};
export default Angry;
