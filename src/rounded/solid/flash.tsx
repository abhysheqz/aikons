import React from "react";
const Flash: React.FC<
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
        d="M13.608 1.147c.706.301 1.189 1.016 1.189 1.87v6.768c0 .11.09.2.2.2H18.1c.886 0 1.496.598 1.748 1.225.25.627.217 1.432-.284 2.075l-6.998 8.983c-.562.72-1.444.895-2.173.584-.707-.3-1.19-1.015-1.19-1.87v-6.767a.2.2 0 0 0-.2-.2H5.9c-.886 0-1.496-.598-1.747-1.226a2.1 2.1 0 0 1 .284-2.074l6.998-8.983c.561-.72 1.444-.895 2.173-.585"
      />
    </svg>
  );
};
export default Flash;
