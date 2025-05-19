import React from "react";
const SwipeLeft_07: React.FC<
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
        d="m17.53 11.276.006 1.809h-.794v-1.642q-.001-.226-.074-.427a1.305 1.305 0 0 0-1.231-.854H14.02l.007 2.307h-.794v-2.14q-.002-.226-.074-.427a1.305 1.305 0 0 0-1.231-.854H10.52v2.307h-.794V2.692a1.442 1.442 0 1 0-2.884 0v12.567l-2.406-2.592a1.563 1.563 0 0 0-2.338.132 1.61 1.61 0 0 0-.03 1.96l.012.015 4.762 7.976h10.4c1.661 0 3.008-1.322 3.008-2.952v-7.241c0-.707-.584-1.281-1.305-1.281z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.043 2.25-3.207 3.207 3.207 3.207 1.414-1.414-.793-.793h3.586v-2h-3.586l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeLeft_07;
