import React from "react";
const Moon: React.FC<
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 0 1 9-9c1.168 0 2.396.794 3.385 2.443C16.363 7.073 17 9.39 17 12s-.637 4.927-1.615 6.557C14.395 20.206 13.168 21 12 21a9 9 0 0 1-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 7a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M6.25 14.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moon;
