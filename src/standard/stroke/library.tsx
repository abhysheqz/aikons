import React from "react";
const Library: React.FC<
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
        d="M10.5 20V5A1.5 1.5 0 0 0 9 3.5H4A1.5 1.5 0 0 0 2.5 5v15A1.5 1.5 0 0 0 4 21.5h5a1.5 1.5 0 0 0 1.5-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 18h.009M17.5 18h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.25 20.714c.803-.127 1.355-.91 1.233-1.747l-2.21-15.163c-.122-.838-.872-1.414-1.675-1.286l-4.848.768c-.803.127-1.355.91-1.233 1.747l2.21 15.163c.122.838.872 1.414 1.675 1.286zM19.519 6.618 12 8M2.5 7.5h8"
      />
    </svg>
  );
};
export default Library;
