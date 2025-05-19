import React from "react";
const Periscope: React.FC<
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
        d="M12 2c-4.418 0-8 3.618-8 8.08 0 2.553 1 4.537 3 6.309 1.41 1.25 3.117 3.324 4.143 5.006.492.807 1.187.807 1.714 0 1.077-1.648 2.733-3.757 4.143-5.006 2-1.772 3-3.756 3-6.308C20 5.618 16.418 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a4 4 0 1 0-.479-7.972 2.5 2.5 0 0 1-3.493 3.493A4 4 0 0 0 12 14Z"
      />
    </svg>
  );
};
export default Periscope;
