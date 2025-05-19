import React from "react";
const Satellite_02: React.FC<
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
        d="M16.201 1.25a.75.75 0 0 1 .53.22l5.8 5.799a.75.75 0 0 1 0 1.06 4.85 4.85 0 1 1-6.86-6.86.75.75 0 0 1 .53-.219M12.168 7.25a.75.75 0 0 1 .53.22l3.832 3.832a.75.75 0 0 1 0 1.06l-5.374 5.375a3.46 3.46 0 0 1-4.893-4.893l5.375-5.374a.75.75 0 0 1 .53-.22M5.47 1.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06zM17.47 13.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.293 7.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414m9.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0m-3.414 6a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Satellite_02;
