import React from "react";
const PlayCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.875 7.392 4.328 2.431c.73.41.73 1.444 0 1.854l-4.328 2.43c-.724.408-1.625-.106-1.625-.926V9.569c0-.82.9-1.333 1.625-.927"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayCircle_02;
