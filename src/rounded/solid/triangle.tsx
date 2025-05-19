import React from "react";
const Triangle: React.FC<
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
        d="M10.173 2.576a5.28 5.28 0 0 1 3.654 0c.936.345 1.691 1.068 2.464 2.072.768.997 1.626 2.374 2.729 4.143l.047.075c1.243 1.995 2.207 3.54 2.827 4.796.622 1.259.966 2.351.824 3.415a5.4 5.4 0 0 1-1.857 3.411c-.816.693-1.917.983-3.302 1.123-1.38.139-3.186.139-5.514.139h-.09c-2.328 0-4.134 0-5.514-.14-1.385-.139-2.486-.429-3.303-1.122a5.4 5.4 0 0 1-1.856-3.411c-.142-1.064.202-2.156.824-3.415.62-1.256 1.584-2.801 2.827-4.796l.047-.075c1.103-1.77 1.961-3.146 2.729-4.143.773-1.004 1.528-1.727 2.464-2.072"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle;
