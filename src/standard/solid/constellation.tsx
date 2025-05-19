import React from "react";
const Constellation: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 16a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M8.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.602 6.58 7-3 .787 1.838-7 3zm6 2.972 2-4 1.788.894-2 4zm5.946 6.342-4-2 .895-1.79 4 2zm-4.582-1.652-1 4-1.94-.485 1-4zm-.418 4.363 5-2.5.895 1.789-5 2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Constellation;
