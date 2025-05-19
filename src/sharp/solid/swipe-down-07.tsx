import React from "react";
const SwipeDown_07: React.FC<
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
        d="m18.03 11.276.006 1.809h-.794v-1.642q-.002-.226-.074-.427a1.305 1.305 0 0 0-1.231-.854H14.52l.007 2.307h-.794v-2.14q-.001-.226-.075-.427a1.305 1.305 0 0 0-1.23-.854H11.02v2.307h-.794V2.692a1.442 1.442 0 0 0-2.884 0v12.567l-2.406-2.592a1.563 1.563 0 0 0-2.338.132 1.61 1.61 0 0 0-.03 1.96l.012.015 4.762 7.976h10.4c1.661 0 3.008-1.322 3.008-2.952v-7.241c0-.707-.584-1.281-1.305-1.281z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.543 2.25v3.586l.793-.793 1.414 1.414-3.207 3.207-3.207-3.207 1.414-1.414.793.793V2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeDown_07;
