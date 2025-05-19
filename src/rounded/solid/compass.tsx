import React from "react";
const Compass: React.FC<
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
        d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25v.75a.75.75 0 0 1-1.5 0v-.75H10A.75.75 0 0 1 9.25 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m1.129 13.747c1.204-.104 2.377-6.013 1.644-6.74-.937-.928-7.165.873-6.753 1.962.155.411.94.671 2.51 1.19.618.205.852.43 1.061 1.052.037.11.077.258.123.43.22.826.579 2.179 1.415 2.106"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Compass;
