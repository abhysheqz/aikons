import React from "react";
const Archive_03: React.FC<
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
        d="M4.785 3.42a2.93 2.93 0 0 1 2.34-1.17h9.75c.92 0 1.788.433 2.34 1.17l2.34 3.12a.98.98 0 0 1 .195.585v11.7a2.925 2.925 0 0 1-2.925 2.925H5.175a2.925 2.925 0 0 1-2.925-2.925v-11.7c0-.211.068-.416.195-.585zm2.34.779a.98.98 0 0 0-.78.39l-1.17 1.56h13.65l-1.17-1.56a.98.98 0 0 0-.78-.39zm5.875 6.3a1 1 0 1 0-2 0v4.586l-1.293-1.292a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 15.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive_03;
