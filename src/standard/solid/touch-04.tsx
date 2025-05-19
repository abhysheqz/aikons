import React from "react";
const Touch_04: React.FC<
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
        d="M7.25 10.204V4.25a2.5 2.5 0 0 1 5 0v5.5H16a3.75 3.75 0 0 1 3.75 3.75v5A3.75 3.75 0 0 1 16 22.25H9.584a2.75 2.75 0 0 1-2.304-1.249l-1.92-2.947c-.455-.694-.734-1.239-.898-1.725a4.1 4.1 0 0 1-.211-1.281 3.8 3.8 0 0 1 .144-1.12c.126-.44.346-.82.637-1.213.28-.377.654-.805 1.113-1.33l.02-.023.017-.019z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touch_04;
