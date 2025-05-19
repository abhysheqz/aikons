import React from "react";
const FlashOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M10 22.75V13.5H4l4.27-5.23 7.46 7.46zM20 10.5l-2.68 3.284-3.284-3.284-.036-.036-4.141-4.14L14 1.25v9.214l.036.036z"
      />
    </svg>
  );
};
export default FlashOff;
