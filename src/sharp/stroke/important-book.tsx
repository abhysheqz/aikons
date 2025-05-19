import React from "react";
const ImportantBook: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 2H5v20h17zM5 6H2m3 6H2m3 6H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 16.994c2.775 0 5.025-2.242 5.025-5.008S16.275 6.98 13.5 6.98 8.476 9.22 8.476 11.986c0 1.712 1.15 3.592 2.642 4.408.853.466 1.73.6 2.382.6ZM13.525 9.02v3.468m0 1.243v1.491"
      />
    </svg>
  );
};
export default ImportantBook;
