import React from "react";
const ArrowReloadVertical: React.FC<
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
        d="M4.793 2.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414L5.5 4.414 3.707 6.207a1 1 0 0 1-1.414-1.414zM21.707 17.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 2.5a1 1 0 0 1 1 1V19a1 1 0 0 0 1 1H12a1 1 0 1 1 0 2H7.5a3 3 0 0 1-3-3V3.5a1 1 0 0 1 1-1M12 3a1 1 0 0 1 1-1h3.5a3 3 0 0 1 3 3v15.5a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H13a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowReloadVertical;
