import React from "react";
const BubbleChatFavourite: React.FC<
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
        d="M20.493 2.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C13.073 3.298 12.934 7.247 17.75 9c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.746 12h.008m3.987 0h.009m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.89 10.004c.92 6.097-4.055 11.004-9.888 11.004-1.425 0-2.78-.283-4.007-.793l-3.977 1.784a.01.01 0 0 1-.014-.012l1.001-3.695C3.162 16.512 2 14.182 2 11.504 2 6.255 6.478 2 12.002 2"
      />
    </svg>
  );
};
export default BubbleChatFavourite;
