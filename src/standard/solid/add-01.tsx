import React from "react";
const Add_01: React.FC<
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
        d="M12 2.75c.69 0 1.25.56 1.25 1.25v16a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 12c0-.69.56-1.25 1.25-1.25h16a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Add_01;
