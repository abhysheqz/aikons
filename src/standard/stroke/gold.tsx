import React from "react";
const Gold: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.621 9.515-.81 3.242A1 1 0 0 0 8.78 14h6.438a1 1 0 0 0 .97-1.242l-.81-3.243A2 2 0 0 0 13.439 8h-2.877a2 2 0 0 0-1.94 1.515M3.121 17.515l-.81 3.242A1 1 0 0 0 3.28 22h6.438a1 1 0 0 0 .97-1.242l-.81-3.243A2 2 0 0 0 7.939 16H5.061a2 2 0 0 0-1.94 1.515M14.121 17.515l-.81 3.242A1 1 0 0 0 14.28 22h6.438a1 1 0 0 0 .97-1.242l-.81-3.243A2 2 0 0 0 18.939 16h-2.877a2 2 0 0 0-1.94 1.515"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2v2m-4.5-.5L9 5m7.5-1.5L15 5"
      />
    </svg>
  );
};
export default Gold;
