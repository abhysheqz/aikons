import React from "react";
const ShoppingBasketFavorite_01: React.FC<
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
        d="M11.5 22H9.622c-2.348 0-3.522 0-4.336-.706-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356.292.356.2.898.019 1.984l-.279 1.66"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.642 14.442c1.207-.731 2.26-.437 2.893.033.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033 1.584.96 1.942 4.125-1.71 6.795-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_01;
