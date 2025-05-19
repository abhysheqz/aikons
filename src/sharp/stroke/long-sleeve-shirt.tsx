import React from "react";
const LongSleeveShirt: React.FC<
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
        d="M18 17.999h3l1-8-1.5-5.5-5.5-2.5H9l-5.5 2.5-1.5 5.5 1 8h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9 1.999 1.5 3h3l1.5-3M18.49 6.997l-.986 3.034.493 10.472C16.103 22.074 12.3 22 11.5 22c-2.598 0-4.739-.851-5.5-1.5L6.5 10 5.492 6.997"
      />
    </svg>
  );
};
export default LongSleeveShirt;
