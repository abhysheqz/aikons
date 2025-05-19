import React from "react";
const Folder_03: React.FC<
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
        d="M3.25 4.15c0-1.05.87-1.9 1.944-1.9h4.341c.65 0 1.258.317 1.618.846L12.52 5.1h5.313c1.611 0 2.917 1.276 2.917 2.85v2.85c0 .525-.435.95-.972.95a.96.96 0 0 1-.972-.95V7.95a.96.96 0 0 0-.973-.95H12a.98.98 0 0 1-.809-.423L9.535 4.15h-4.34v6.65c0 .525-.436.95-.973.95a.96.96 0 0 1-.972-.95z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.287 12.347c-.229-1.11.646-2.097 1.743-2.097h17.941c1.164 0 2.058 1.106 1.702 2.259l-2.47 8a1.78 1.78 0 0 1-1.701 1.241H4.676a1.77 1.77 0 0 1-1.743-1.403z"
      />
    </svg>
  );
};
export default Folder_03;
