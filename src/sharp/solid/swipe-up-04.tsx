import React from "react";
const SwipeUp_04: React.FC<
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
        d="m18.043 1.25 3.207 3.207-1.414 1.414-.793-.793v3.586h-2V5.078l-.793.793-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.666 10.718V4.75a2.5 2.5 0 1 1 5 0v4.5H15.5A3.75 3.75 0 0 1 19.25 13v6a3.75 3.75 0 0 1-3.75 3.75H6.593L3.86 18.554c-.455-.694-.734-1.239-.898-1.725a4.1 4.1 0 0 1-.211-1.281 3.8 3.8 0 0 1 .144-1.12c.126-.44.346-.82.637-1.213.28-.377.654-.805 1.113-1.33l.02-.023z"
      />
    </svg>
  );
};
export default SwipeUp_04;
