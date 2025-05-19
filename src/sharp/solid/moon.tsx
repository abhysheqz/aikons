import React from "react";
const Moon: React.FC<
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
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75M3.205 12a8.795 8.795 0 0 1 8.796-8.795c1.14 0 2.34.776 3.308 2.388.955 1.592 1.578 3.855 1.578 6.407s-.623 4.815-1.578 6.408c-.967 1.612-2.167 2.388-3.308 2.388A8.795 8.795 0 0 1 3.205 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 6h2.009v2h-2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 14.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
    </svg>
  );
};
export default Moon;
