import React from "react";
const PaintBoard: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75h.076l.859-.006-.122-.85a6.25 6.25 0 0 1 8.577-6.67l.796.329.217-.834c.227-.869.347-1.78.347-2.719 0-5.937-4.813-10.75-10.75-10.75M7.74 14.036a1 1 0 1 0 .517 1.932l.009-.002a1 1 0 1 0-.518-1.932zM6.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m10-1.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBoard;
