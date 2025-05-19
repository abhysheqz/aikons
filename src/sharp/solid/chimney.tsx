import React from "react";
const Chimney: React.FC<
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
        d="M14.25 7.25V8c0 2.67.294 6.239.866 8.813l1.32 5.937H3.565l1.319-5.937C5.457 14.24 5.75 10.67 5.75 8v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 21.25h15.5v1.5H2.25zM9.25 5A3.75 3.75 0 0 1 13 1.25h4.75v1.5H13A2.25 2.25 0 0 0 10.75 5v.75h-1.5zM19.25 1.25h2.5v1.5h-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 4.25h7.5v1.5h-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chimney;
