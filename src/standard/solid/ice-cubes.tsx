import React from "react";
const IceCubes: React.FC<
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
        d="M9.257 2.357a1.757 1.757 0 0 0-2.252 1.05l-1.73 4.755a1.757 1.757 0 0 0 1.05 2.252l4.754 1.73a1.757 1.757 0 0 0 2.252-1.05l1.73-4.754a1.757 1.757 0 0 0-1.05-2.252zm6.519 8.4a1.73 1.73 0 0 1 2.448 0l3.519 3.52a1.73 1.73 0 0 1 0 2.448l-3.519 3.519a1.73 1.73 0 0 1-2.448 0l-3.519-3.519a1.73 1.73 0 0 1 0-2.448zM1.75 15c0-.967.784-1.75 1.75-1.75h5c.966 0 1.75.783 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IceCubes;
