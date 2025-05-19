import React from "react";
const BubbleChatUnlock: React.FC<
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
        d="M16.501 5.493V3.995a1.998 1.998 0 0 1 3.5-1.32m-5 2.818h7v5.49h-7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.998 11.981h.009m-4.004 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.007 2.176c-.875-.149-1.79-.188-2.728-.104-5.714.301-9.716 5.094-9.241 10.361.443 3.25 1.727 4.466 2.985 5.74l-1.06 3.815a.01.01 0 0 0 .014.012l4.008-1.813c1.586.742 3.186.867 5.078.697 4.26-.383 7.545-3.18 8.59-6.87"
      />
    </svg>
  );
};
export default BubbleChatUnlock;
