import React from "react";
const Candelier_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h20M12 3v13M19.5 3v8M4.5 3v8M19.498 16c-1.001 0-2.496-.5-2.496-1.413 0-2.087 1.094-3.587 2.496-3.587s2.5 1.5 2.5 3.5c.002 1-1.498 1.5-2.5 1.5M4.496 16C3.495 16 2 15.5 2 14.587 2 12.5 3.094 11 4.496 11c1.403 0 2.5 1.5 2.5 3.5.002 1-1.498 1.5-2.5 1.5M11.996 21c-1.001 0-2.496-.5-2.496-1.413C9.5 17.5 10.594 16 11.996 16s2.5 1.5 2.5 3.5c.002 1-1.498 1.5-2.5 1.5"
      />
    </svg>
  );
};
export default Candelier_02;
