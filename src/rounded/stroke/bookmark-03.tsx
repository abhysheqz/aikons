import React from "react";
const Bookmark_03: React.FC<
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
        d="M12 22c-4.243 0-6.364 0-7.682-1.464C3 19.07 3 16.714 3 12s0-7.07 1.318-8.535S7.758 2 12 2s6.364 0 7.682 1.465C21 4.929 21 7.286 21 12s0 7.071-1.318 8.536S16.242 22 12 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2.5v7.326c0 1.247 0 1.87.386 2.094.749.432 2.152-1.01 2.819-1.444.387-.252.58-.378.795-.378s.408.126.795.378c.667.434 2.07 1.876 2.819 1.444.386-.223.386-.847.386-2.094V2.5"
      />
    </svg>
  );
};
export default Bookmark_03;
