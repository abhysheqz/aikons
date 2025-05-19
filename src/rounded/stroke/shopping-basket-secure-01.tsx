import React from "react";
const ShoppingBasketSecure_01: React.FC<
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
        strokeWidth={1.5}
        d="M12 22H9.622c-2.348 0-3.522 0-4.336-.706-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356.292.356.2.898.019 1.984l-.279 1.66"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.5V15c-2 0-3.5-1-3.5-1S16 15 14 15v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_01;
