import React from "react";
const Bebo: React.FC<
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
        d="M12 18a4 4 0 0 0 4-4c0-2.1-1.324-3.43-3.434-3.854C11.713 9.976 11 9.295 11 8.425c0-1.305 1.068-2.394 2.352-2.165C17.478 6.997 20 9.756 20 14a8 8 0 1 1-16 0V4a2 2 0 1 1 4 0v10a4 4 0 0 0 4 4Z"
      />
    </svg>
  );
};
export default Bebo;
