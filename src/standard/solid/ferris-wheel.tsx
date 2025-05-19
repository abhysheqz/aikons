import React from "react";
const FerrisWheel: React.FC<
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
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11a1 1 0 0 1 .929.629l4 10a1 1 0 1 1-1.857.742L12 14.693 8.93 22.37a1 1 0 1 1-1.857-.742l4-10A1 1 0 0 1 12 11M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FerrisWheel;
