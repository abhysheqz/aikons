import React from "react";
const Blockchain_03: React.FC<
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
        d="M12 11.5 6.344 8.672M12 11.5l5.656-2.828M12 11.5v6.582M12 5.5l6 3v7l-6 3-6-3v-7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21 7-9-5-9 5v10l9 5 9-5z"
      />
    </svg>
  );
};
export default Blockchain_03;
