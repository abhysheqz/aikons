import React from "react";
const Tablet_02: React.FC<
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
        d="M2.75 5A3.75 3.75 0 0 1 6.5 1.25h11A3.75 3.75 0 0 1 21.25 5v14a3.75 3.75 0 0 1-3.75 3.75h-11A3.75 3.75 0 0 1 2.75 19zm6.5 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 5M12 17.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tablet_02;
