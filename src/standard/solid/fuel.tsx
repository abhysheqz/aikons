import React from "react";
const Fuel: React.FC<
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
        d="M4 3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6H8V4.5H6V6H4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 4A2.75 2.75 0 0 1 14 1.25h5A2.75 2.75 0 0 1 21.75 4v16A2.75 2.75 0 0 1 19 22.75H5A2.75 2.75 0 0 1 2.25 20V8A2.75 2.75 0 0 1 5 5.25h6.25zM18 6h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2m-5.657 4.136a.5.5 0 0 0-.686 0l-.282.262c-.44.405-1.052.969-1.585 1.582-.332.381-.649.798-.884 1.228-.234.426-.406.897-.406 1.38A3.433 3.433 0 0 0 12 18c2.168 0 3.5-1.73 3.5-3.413 0-.482-.172-.953-.406-1.379a7.2 7.2 0 0 0-.884-1.229c-.533-.612-1.145-1.176-1.585-1.58v-.001z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fuel;
