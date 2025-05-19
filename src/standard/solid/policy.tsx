import React from "react";
const Policy: React.FC<
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
        d="M18.5 17.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6M15.273 21.815l1.008-3.94a4.23 4.23 0 0 0 2.219.625 4.23 4.23 0 0 0 2.318-.687l.913 4.021a.75.75 0 0 1-1.01.863l-2.221-.889-2.221.889a.75.75 0 0 1-1.006-.883"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h13A2.75 2.75 0 0 1 20.75 4v6.644A4.25 4.25 0 0 0 15.26 17l-1.197 4.505a2 2 0 0 0 .083 1.245H5A2.75 2.75 0 0 1 2.25 20zM7.5 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Policy;
