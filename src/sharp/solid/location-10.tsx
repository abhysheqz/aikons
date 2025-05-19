import React from "react";
const Location_10: React.FC<
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
        d="M12 1.25c-4.267 0-7.75 3.398-7.75 7.619 0 2.42.997 4.304 2.886 5.93 1.215 1.046 3.392 3.266 4.229 4.6a.75.75 0 0 0 1.257.02c.894-1.329 3.04-3.586 4.242-4.62 1.89-1.626 2.886-3.51 2.886-5.93 0-4.221-3.483-7.619-7.75-7.619M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.205 19.977c.92.46 2.26.773 3.795.773s2.876-.313 3.795-.773c.98-.49 1.205-.981 1.205-1.227h2c0 1.411-1.118 2.42-2.31 3.016-1.252.626-2.912.984-4.69.984s-3.438-.358-4.69-.984C6.118 21.17 5 20.16 5 18.75h2c0 .246.225.737 1.205 1.227"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_10;
