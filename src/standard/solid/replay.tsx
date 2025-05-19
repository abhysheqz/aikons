import React from "react";
const Replay: React.FC<
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
        d="M12 3a9 9 0 1 0 9 9 1 1 0 1 1 2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c3.346 0 6.343 1.495 8.36 3.85a1 1 0 1 1-1.52 1.3A8.98 8.98 0 0 0 12 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 1.5a1 1 0 0 1 1 1V6a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H19V2.5a1 1 0 0 1 1-1M8.75 9.723c0-1.344 1.452-2.186 2.618-1.52l3.985 2.278c1.175.671 1.175 2.367 0 3.038l-3.985 2.277c-1.166.667-2.618-.175-2.618-1.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Replay;
