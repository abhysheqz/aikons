import React from "react";
const Sushi_01: React.FC<
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
        strokeWidth={1.5}
        d="M20 13c0 3.002 0 4.504-.879 5.436-2.087 2.215-12.405 1.95-14.242 0C4 17.504 4 16.002 4 13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.04 4C4.453 4 2.477 8.796 2.039 12.633c-.188 1.642.3 1.616 1.653.908 2.068-1.083 4.817-1.775 8.348-1.775 3.526 0 6.224.69 8.268 1.77 1.35.713 1.836.738 1.656-.904C21.544 8.796 19.627 4 12.04 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.996 12c0-2.528.887-7.436 6-8M15 12c0-1.939.512-5.264 3-7"
      />
    </svg>
  );
};
export default Sushi_01;
