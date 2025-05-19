import React from "react";
const Castle_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 22 .5-4.994h5L15 22M3 22h18M15 11.012h3M6 13.021h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.917 21.388 6.503 8.036h11.001l1.572 13.367M6.352 7.926l-2.354-1.91V2.01a.01.01 0 0 1 .01-.01h3.469a.01.01 0 0 1 .01.01v2.522h2.53l.498-2.524a.01.01 0 0 1 .01-.008h2.961a.01.01 0 0 1 .01.008l.5 2.504h2.497V2.045a.01.01 0 0 1 .01-.01h3.465a.01.01 0 0 1 .01.01l.036 3.978-2.318 1.83"
      />
    </svg>
  );
};
export default Castle_01;
