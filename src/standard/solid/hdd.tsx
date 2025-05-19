import React from "react";
const Hdd: React.FC<
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
        d="M3.25 4A2.75 2.75 0 0 1 6 1.25h12A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20zm3.5 5.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M10 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.216 9.298a1 1 0 0 1-.01 1.414L9.054 13.94a1 1 0 0 1-1.405-1.423l3.152-3.229a1 1 0 0 1 1.415.01"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hdd;
