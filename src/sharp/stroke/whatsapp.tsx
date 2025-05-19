import React from "react";
const Whatsapp: React.FC<
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
        d="m8.64 12.372 1.89-1.89-.558-3.488a.01.01 0 0 0-.01-.008H7.024a.01.01 0 0 0-.01.01c-.112 2.953 1.567 6.449 4.609 8.43m0 0c1.49.97 3.308 1.578 5.402 1.58a.01.01 0 0 0 .01-.01v-2.884a.01.01 0 0 0-.008-.01l-3.54-.601z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22.002c5.524 0 10.002-4.478 10.002-10.002S17.524 1.998 12 1.998 1.998 6.476 1.998 12c0 1.889.434 3.498 1.344 5.005l-1.34 4.98a.01.01 0 0 0 .013.012l4.955-1.331c1.513.92 3.13 1.336 5.03 1.336Z"
      />
    </svg>
  );
};
export default Whatsapp;
