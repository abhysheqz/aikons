import React from "react";
const AlignHorizontalCenter: React.FC<
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
        d="M12 19v3M12 10v4M12 2v3M8 7.5c0-.844-.083-1.818.75-2.299C9.098 5 9.566 5 10.5 5h3c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201C7.917 9.318 8 8.344 8 7.5M4 16.5c0-.844-.083-1.818.75-2.299C5.098 14 5.566 14 6.5 14h11c.935 0 1.402 0 1.75.201.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-11c-.934 0-1.402 0-1.75-.201C3.917 18.318 4 17.344 4 16.5"
      />
    </svg>
  );
};
export default AlignHorizontalCenter;
