import React from "react";
const TextTracking: React.FC<
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
        d="m4.611 19.625.7.876L3.75 21.75l-2.5-3.125 2.5-3.124L5.31 16.75l-.7.875h14.776l-.7-.875 1.562-1.25 2.5 3.125-2.5 3.125-1.562-1.25.7-.875zM15.86 2.25h2.401l4.24 11.658-1.88.684-1.215-3.342h-4.69L13.5 14.592l-1.88-.684zm-.417 7h3.236L17.06 4.801zM6.926 10.988 10.5 2.25l1.851.757-4.5 11a1 1 0 0 1-1.851 0l-4.5-11 1.851-.757z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextTracking;
