import React from "react";
const BubbleChatSecure: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.991 12h.01m-4.005 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.056 2C6.502 2 2 6.255 2 11.504c0 2.678 1.168 5.008 3.022 6.788l-1.007 3.695a.01.01 0 0 0 .014.012l3.999-1.784c1.233.51 2.595.793 4.028.793 5.016 0 9.944-3.92 9.944-9.499"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.988 5.5V3c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default BubbleChatSecure;
