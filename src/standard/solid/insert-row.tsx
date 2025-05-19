import React from "react";
const InsertRow: React.FC<
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
        d="M1.75 5.5v2.75h6v-6.5H5.5A3.75 3.75 0 0 0 1.75 5.5m13-3.75h-5.5v6.5h5.5zm1.5 0h2.25a3.75 3.75 0 0 1 3.75 3.75v2.75h-6zm6 16.75V9.75H1.75v8.75a3.75 3.75 0 0 0 3.75 3.75h4.25V19.5H8A2.25 2.25 0 0 1 8 15h1.75v-1.75a2.25 2.25 0 0 1 4.5 0V15H16a2.25 2.25 0 0 1 0 4.5h-1.75v2.75h4.25a3.75 3.75 0 0 0 3.75-3.75M13 13.25a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InsertRow;
