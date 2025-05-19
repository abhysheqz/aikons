import React from "react";
const Location_03: React.FC<
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
        d="m3.072 21.379 2-5 1.856.742-1.451 3.63h13.046l-1.451-3.63 1.857-.742 2 5A1 1 0 0 1 20 22.75H4a1 1 0 0 1-.928-1.371"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.356 18.519c.102.052.644.306.644.306s.542-.254.644-.306a17.867 17.867 0 0 0 3.344-2.25C17.8 14.717 19.75 12.327 19.75 9.2c0-4.37-3.45-7.95-7.75-7.95S4.25 4.83 4.25 9.2c0 3.127 1.95 5.517 3.762 7.07a18 18 0 0 0 3.344 2.249M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_03;
