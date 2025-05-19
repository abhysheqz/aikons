import React from "react";
const PisaTower: React.FC<
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
        d="M2 21h20M6 21l4.5-17M15 21l4.07-14.754M9 3.5l11 3M8 8.5 19 12M6.5 13.5l11 3M12.5 4l.246-.984a1 1 0 0 1 1.257-.715l3.083.925a1 1 0 0 1 .683 1.2L17.5 5.5M10.5 21l.56-2M14 8.5l-.459 1.638M12.18 15l.42-1.5"
      />
    </svg>
  );
};
export default PisaTower;
