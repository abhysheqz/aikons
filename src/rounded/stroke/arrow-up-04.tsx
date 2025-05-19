import React from "react";
const ArrowUp_04: React.FC<
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
        d="M12 10v10M13.603 5.414l.76.967c1.234 1.565 1.851 2.348 1.57 2.984-.281.635-1.245.635-3.172.635H11.24c-1.927 0-2.89 0-3.172-.635-.281-.636.336-1.419 1.57-2.984l.76-.967C11.14 4.471 11.511 4 12 4s.86.471 1.603 1.414"
      />
    </svg>
  );
};
export default ArrowUp_04;
