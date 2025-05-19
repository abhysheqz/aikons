import React from "react";
const Hologram: React.FC<
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
        d="M11.663 1.33a.75.75 0 0 1 .67 0l5.1 2.56a1 1 0 0 1 .09.055 1 1 0 0 1 .477.852v5.85a1 1 0 0 1-.574.905l-5 2.353a1 1 0 0 1-.852 0l-5-2.353A1 1 0 0 1 6 10.647V4.802a1 1 0 0 1 .558-.897 1 1 0 0 1 .068-.038zM13 7.351l3-1.435v4.095l-3 1.412zM8 5.88l3 1.467v4.076l-3-1.41zm1.59 9.505a1 1 0 0 0-1.846-.77l-1.667 4a1 1 0 0 0 1.846.77zm6.667-.77a1 1 0 0 0-1.847.77l1.667 4a1 1 0 1 0 1.846-.77zM13 16.335a1 1 0 0 0-2 0V19a1 1 0 0 0 2 0zM3 21a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hologram;
