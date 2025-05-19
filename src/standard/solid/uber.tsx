import React from "react";
const Uber: React.FC<
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
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25C6.4 1.25 1.8 5.532 1.296 11h6.957v-.5a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25V13H1.296C1.8 18.468 6.4 22.75 12 22.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uber;
