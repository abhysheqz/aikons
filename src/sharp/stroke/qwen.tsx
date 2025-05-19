import React from "react";
const Qwen: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 14.5h-2.56l-1.538-2.434-5.457 9.594M20 7H10l1-2-1.763-2.644M4.25 7.5 9 17H6l-.833 2.5M9 2h3.5L14 4.5h5.13L20.5 7l-1.31 2.662L22 14.5l-1.645 2.663h-2.477L15 22h-3.248L10.5 20H5l-1.5-2.5 1-3-2.5-5L4 7h2.749z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 15.5 9 10h6z"
      />
    </svg>
  );
};
export default Qwen;
