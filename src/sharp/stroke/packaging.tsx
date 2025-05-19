import React from "react";
const Packaging: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 2c-.667 2.667-2 9.4-2 15 0 3 .5 5 .5 5M19 2c.667 3 2 10 2 14 0 2-.5 4.5-.5 4.5l-3 1.5M19 2H5a62 62 0 0 0-.657 3h14c.242-1.234.474-2.27.657-3Zm-1.5 20h-14S3 20 3 17C3 11 5 5 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.075 19A27 27 0 0 1 6 17c0-1.936.16-4.008.395-6h8C14.16 12.992 14 15.064 14 17c0 .73.03 1.402.075 2z"
      />
    </svg>
  );
};
export default Packaging;
