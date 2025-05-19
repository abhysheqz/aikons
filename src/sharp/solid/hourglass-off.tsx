import React from "react";
const HourglassOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM17.812 5.175V2.25h1.938v2.925A7.8 7.8 0 0 1 15.755 12l-.13.09-1.477-1.477a5.85 5.85 0 0 0 3.664-5.438"
      />
      <path
        fill="currentColor"
        d="M19.75 21.75H4.25v-2.925A7.8 7.8 0 0 1 8.245 12 7.8 7.8 0 0 1 4.25 5.175V4.25l2.043 2.043a5.84 5.84 0 0 0 4.632 4.632l8.825 8.825zM21 1v2H6.536l-2-2z"
      />
      <path fill="currentColor" d="M3 21h17v2H3z" />
    </svg>
  );
};
export default HourglassOff;
