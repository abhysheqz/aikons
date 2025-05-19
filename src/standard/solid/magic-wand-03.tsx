import React from "react";
const MagicWand_03: React.FC<
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
        d="M13.497 2.688a.75.75 0 0 0-1.302-.442L8.79 5.995l-4.757-1.94a.75.75 0 0 0-.98.974l1.83 4.573-3.197 3.654A.75.75 0 0 0 2.25 14.5h5.017l2.3 5.06a.75.75 0 0 0 1.394-.073l1.882-5.644 5.644-1.882a.75.75 0 0 0 .098-1.382l-4.623-2.311zm.546 12.355a1 1 0 0 1 1.414 0l1.574 1.574a2.25 2.25 0 0 1 2.309.542l2.001 2.001a2.25 2.25 0 1 1-3.18 3.181l-2.002-2.001a2.25 2.25 0 0 1-.542-2.309l-1.574-1.574a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MagicWand_03;
