import React from "react";
const Behance_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM6 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3A2.75 2.75 0 0 0 10.887 12 2.75 2.75 0 0 0 9 7.25zM10.25 10c0 .69-.56 1.25-1.25 1.25H6.75v-2.5H9c.69 0 1.25.56 1.25 1.25M9 12.75H6.75v2.5H9a1.25 1.25 0 1 0 0-2.5m5.25-4.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM15.5 10c-1.73 0-3.25 1.333-3.25 3v.667c0 1.75 1.505 3.083 3.25 3.083 1.18 0 2.231-.599 2.803-1.522a.75.75 0 0 0-1.275-.79c-.292.472-.856.812-1.528.812-.982 0-1.7-.707-1.748-1.5H18a.75.75 0 0 0 .75-.75c0-1.667-1.52-3-3.25-3m0 1.5c.665 0 1.2.326 1.496.75h-2.992c.296-.424.831-.75 1.496-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Behance_02;
