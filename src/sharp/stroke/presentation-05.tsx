import React from "react";
const Presentation_05: React.FC<
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
        d="M21 16.5v-14H3v14zM12 16.5v5M8 21.5l1.5-2h5l1.5 2"
      />
    </svg>
  );
};
export default Presentation_05;
