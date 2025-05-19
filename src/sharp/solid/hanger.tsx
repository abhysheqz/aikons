import React from "react";
const Hanger: React.FC<
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
        d="M11 6.405c0-.455.401-.905 1-.905s1 .45 1 .905c0 .315-.183.617-.502.784a7 7 0 0 1-.822.365l-.013.005-.663.236v2.616l-7.36 4.081-.005.003A3.208 3.208 0 0 0 5.208 20.5h13.584a3.208 3.208 0 0 0 1.573-6.005L13 10.411V9.17c.133-.06.278-.13.426-.208C14.345 8.48 15 7.529 15 6.405c0-1.65-1.39-2.905-3-2.905S9 4.755 9 6.405zM4.614 16.24 12 12.144l7.384 4.094.002.002a1.208 1.208 0 0 1-.594 2.26H5.208a1.208 1.208 0 0 1-.594-2.26"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hanger;
