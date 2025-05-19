import React from "react";
const Location_08: React.FC<
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
        d="M12 1.25c-4.267 0-7.75 3.398-7.75 7.619 0 2.42.997 4.304 2.886 5.93 1.215 1.046 3.391 3.266 4.229 4.6a.75.75 0 0 0 1.257.02c.894-1.329 3.04-3.586 4.242-4.62 1.89-1.626 2.886-3.51 2.886-5.93 0-4.221-3.483-7.619-7.75-7.619M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.072 21.379 2-5 1.856.743-1.451 3.628h13.046l-1.451-3.628 1.857-.743 2 5A1 1 0 0 1 20 22.75H4a1 1 0 0 1-.928-1.371"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_08;
