import React from "react";
const Square_01: React.FC<
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
        d="M2 7a1 1 0 0 1 1-1h1.5c1.546 0 2.628 1.019 3.08 2.32l1.139 3.268c.64-1.094 1.308-2.149 2.016-3.028C11.835 7.194 13.229 6 15 6a1 1 0 1 1 0 2c-.816 0-1.693.556-2.707 1.815-.92 1.142-1.79 2.656-2.7 4.28l1.715 4.928c.235.674.671.977 1.192.977H14a1 1 0 1 1 0 2h-1.5c-1.546 0-2.628-1.018-3.08-2.32L8.28 16.412c-.64 1.094-1.308 2.149-2.016 3.028C5.165 20.806 3.771 22 2 22a1 1 0 1 1 0-2c.816 0 1.693-.556 2.707-1.815.92-1.142 1.79-2.656 2.7-4.28L5.693 8.976C5.457 8.303 5.021 8 4.5 8H3a1 1 0 0 1-1-1M17 5a3 3 0 1 1 4.8 2.4L21 8h1a1 1 0 1 1 0 2h-4a1 1 0 0 1-.6-1.8l3.2-2.4A1 1 0 1 0 19 5a1 1 0 1 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Square_01;
