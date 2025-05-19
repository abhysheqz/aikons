import React from "react";
const MusicNote_04: React.FC<
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
        d="M12.5 3v14M12.5 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 3a7 7 0 0 1 7 7c-1.5-1.5-5.444-3.733-7-1.556"
      />
    </svg>
  );
};
export default MusicNote_04;
