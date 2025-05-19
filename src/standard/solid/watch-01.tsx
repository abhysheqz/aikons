import React from "react";
const Watch_01: React.FC<
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 6a1 1 0 1 0-2 0v2.005a1 1 0 0 0 .295.709l1 .995a1 1 0 0 0 1.41-1.418L13 11.59z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.44 3h-2.877a1 1 0 0 0-.97.757l-.621 2.486-1.94-.486.62-2.485A3 3 0 0 1 10.563 1h2.878a3 3 0 0 1 2.91 2.272l.621 2.485-1.94.486-.621-2.486A1 1 0 0 0 13.44 3M13.44 21h-2.877a1 1 0 0 1-.97-.758l-.621-2.485-1.94.485.62 2.486A3 3 0 0 0 10.563 23h2.878a3 3 0 0 0 2.91-2.272l.621-2.486-1.94-.485-.621 2.485a1 1 0 0 1-.97.758"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Watch_01;
