import React from "react";
const Absolute: React.FC<
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
        d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2zm13.5-1a1 1 0 0 1 1-1H20a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 8a1 1 0 0 1 1-1h1.264a3 3 0 0 1 2.683 1.658l.781 1.563 1.922-2.197A3 3 0 0 1 16.407 7H17a1 1 0 1 1 0 2h-.593a1 1 0 0 0-.752.341l-2.46 2.812 1.147 2.294a1 1 0 0 0 .894.553H16.5a1 1 0 1 1 0 2h-1.264a3 3 0 0 1-2.683-1.658l-.781-1.562-1.922 2.196A3 3 0 0 1 7.592 17H7a1 1 0 1 1 0-2h.592a1 1 0 0 0 .753-.341l2.46-2.812-1.147-2.294A1 1 0 0 0 8.764 9H7.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Absolute;
