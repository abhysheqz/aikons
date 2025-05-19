import React from "react";
const BubbleChatDone: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m13.998 6 2 2 6-6" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.993 12h.01m3.986 0h.009m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2c-5.522 0-9.998 4.255-9.998 9.504 0 2.678 1.162 5.008 3.004 6.788l-1 3.695a.01.01 0 0 0 .013.012l3.976-1.784c1.226.51 2.58.793 4.005.793 5.522 0 9.998-4.255 9.998-9.504 0-.566-.075-1.579-.347-2.502"
      />
    </svg>
  );
};
export default BubbleChatDone;
