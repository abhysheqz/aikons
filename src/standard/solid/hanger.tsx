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
        d="M11 6.905C11 6.45 11.401 6 12 6s1 .45 1 .905c0 .315-.183.617-.502.784a7 7 0 0 1-.822.365l-.013.005A1 1 0 0 0 11 9v1.911l-7.36 4.081-.005.003A3.208 3.208 0 0 0 5.208 21h13.584a3.208 3.208 0 0 0 1.573-6.005L13 10.911V9.67c.133-.06.278-.13.426-.208C14.345 8.98 15 8.029 15 6.905 15 5.255 13.61 4 12 4S9 5.255 9 6.905a1 1 0 1 0 2 0M4.614 16.74 12 12.644l7.384 4.094.002.002a1.208 1.208 0 0 1-.594 2.26H5.208a1.208 1.208 0 0 1-.594-2.26"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hanger;
