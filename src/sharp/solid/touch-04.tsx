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
        d="M6.666 10.218V4.25a2.5 2.5 0 1 1 5 0v4.5H16.5a3.75 3.75 0 0 1 3.75 3.75v6a3.75 3.75 0 0 1-3.75 3.75H7.593L4.86 18.054c-.455-.694-.734-1.239-.898-1.725a4.1 4.1 0 0 1-.211-1.281 3.8 3.8 0 0 1 .144-1.12c.126-.44.346-.82.637-1.213.28-.377.654-.805 1.113-1.33l.02-.023z"
      />
    </svg>
  );
};
export default Touch_04;
