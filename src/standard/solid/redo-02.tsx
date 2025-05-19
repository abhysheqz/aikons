import React from "react";
const Redo_02: React.FC<
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
        d="M12.004 2c-5.523 0-10 4.477-10 10s4.477 10 10 10a1 1 0 0 0 0-2 8 8 0 1 1 6.683-12.4l-3.523-.586a1 1 0 1 0-.328 1.972l6 1A1 1 0 0 0 22 9V3a1 1 0 1 0-2 0v2.994A9.99 9.99 0 0 0 12.004 2"
      />
    </svg>
  );
};
export default Redo_02;
