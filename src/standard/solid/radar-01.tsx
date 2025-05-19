import React from "react";
const Radar_01: React.FC<
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
        d="M6.677 6.7a7.4 7.4 0 0 1 6.412-2.111 1 1 0 1 1-.308 1.976 5.4 5.4 0 0 0-4.684 1.543 5.54 5.54 0 0 0 0 7.784 5.404 5.404 0 0 0 7.693 0 1 1 0 0 1 1.42 1.408 7.404 7.404 0 0 1-10.533 0c-2.903-2.928-2.903-7.672 0-10.6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-.748-3.6 1 1 0 1 1 1.832-.8c.59 1.348.916 2.837.916 4.4 0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c3.037 0 5.789 1.232 7.778 3.222a1 1 0 0 1 0 1.414l-7.07 7.071a1 1 0 0 1-1.415-1.414l6.325-6.325A8.96 8.96 0 0 0 12 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radar_01;
