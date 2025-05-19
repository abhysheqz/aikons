import React from "react";
const Beta: React.FC<
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
        d="M16.39 9.697c.81-.8 1.32-1.874 1.32-3.097 0-2.654-2.395-4.6-5.078-4.6S7.554 3.946 7.554 6.6v12.6c0 .328-.345.8-1.04.8-.44 0-.774-.212-.929-.448L4.25 21.069c.57.587 1.39.931 2.265.931 1.557 0 3.039-1.14 3.039-2.8v-.426c1.1.895 2.554 1.426 4.097 1.426 3.247 0 6.098-2.349 6.098-5.5 0-2.194-1.393-4.077-3.36-5.003M9.553 6.6c0-1.322 1.257-2.6 3.078-2.6s3.078 1.278 3.078 2.6-1.258 2.6-3.078 2.6v2q.568-.001 1.111-.112c2.304.045 4.006 1.786 4.006 3.612 0 1.82-1.714 3.5-4.098 3.5s-4.097-1.68-4.097-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Beta;
