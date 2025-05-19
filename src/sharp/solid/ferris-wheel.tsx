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
        d="M12 7.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 10.632 4.914 11.056-1.828.812L12 15.556 8.914 22.5l-1.828-.812z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 4.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M19 5.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M2.25 16.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 16.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default FerrisWheel;
