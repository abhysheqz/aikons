import React from "react";
const Zip_02: React.FC<
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
        d="m2.751 1.25-.001 21.5h17.5v-1.752H7v-3.165l1.376-1.835H7v-4h13.25V8.629L12.86 1.25zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 13.249h4.5v1.502l-2.624 3.498h2.624v1.5h-4.5v-1.498l2.627-3.502H8.25zm7 0v6.5h-1.5v-6.5zm1 0H19a2.25 2.25 0 0 1 0 4.5h-1.25v2h-1.5zm1.5 3H19a.75.75 0 0 0 0-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zip_02;
