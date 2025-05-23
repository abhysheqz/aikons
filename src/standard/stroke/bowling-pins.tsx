import React from "react";
const BowlingPins: React.FC<
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
        d="M13 10.341a6 6 0 1 1 1 11.576M17.991 15H18m-3 0h.009m1.486-2h.01M5.884 6.682l-.429-2.166C5.197 3.215 6.184 2 7.5 2s2.303 1.215 2.045 2.516l-.43 2.166c-.645 3.256 1.113 5.21 2.335 7.914a6.2 6.2 0 0 1 .43 3.765c-.187.945-.548 2.364-1.111 3.268-.154.247-.437.371-.728.371H4.96c-.291 0-.574-.124-.728-.37-.563-.905-.924-2.323-1.112-3.268a6.2 6.2 0 0 1 .431-3.766c1.222-2.705 2.98-4.658 2.334-7.914M6 9h3"
      />
    </svg>
  );
};
export default BowlingPins;
