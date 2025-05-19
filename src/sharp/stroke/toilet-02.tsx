import React from "react";
const Toilet_02: React.FC<
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
        d="M14.4 13.98c.972-.91 1.6-2.36 1.6-3.993 0-2.757-1.79-4.991-4-4.991S8 7.23 8 9.987c0 1.633.628 3.083 1.6 3.994"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10.985h2V2H4v8.985h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.996 13.983h5.174l4.85-.017c-.084 2.875-1.308 4.347-2.511 5.185l1.484 2.68a.1.1 0 0 1-.088.149H11.81l-3.699.016a.1.1 0 0 1-.087-.148l1.49-2.693c-1.21-.807-2.37-2.273-2.518-5.172Z"
      />
    </svg>
  );
};
export default Toilet_02;
