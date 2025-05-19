import React from "react";
const LockSync_01: React.FC<
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
        d="M12.024 3.205c-4.873 0-8.82 3.94-8.82 8.795s3.947 8.796 8.82 8.796a8.82 8.82 0 0 0 8.087-5.279l1.79.784a10.78 10.78 0 0 1-9.877 6.449C6.076 22.75 1.25 17.94 1.25 12S6.076 1.25 12.024 1.25c5.586 0 10.18 4.24 10.721 9.676a.977.977 0 0 1-1.281 1.024l-2.932-.977.618-1.855 1.353.451a8.82 8.82 0 0 0-8.479-6.364"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.75A2.75 2.75 0 0 0 9.25 9.5v.75h-1.5v7h8.5v-7h-1.5V9.5A2.75 2.75 0 0 0 12 6.75M10.75 9.5v.75h2.5V9.5a1.25 1.25 0 1 0-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockSync_01;
