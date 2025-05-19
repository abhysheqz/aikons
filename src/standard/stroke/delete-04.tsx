import React from "react";
const Delete_04: React.FC<
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
        d="m20 15-7 7m7 0-7-7M19.5 5.5l-.394 6.5M4.5 5.5l.886 14.621A2 2 0 0 0 7.382 22H10M16 5.5l-1.24-2.894A1 1 0 0 0 13.84 2h-3.68a1 1 0 0 0-.92.606L8 5.5m8 0h5m-5 0H8m0 0H3"
      />
    </svg>
  );
};
export default Delete_04;
