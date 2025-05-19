import React from "react";
const Location_05: React.FC<
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
        d="M11.356 18.519c.102.052.644.306.644.306s.542-.254.644-.306a17.862 17.862 0 0 0 3.344-2.25C17.8 14.717 19.75 12.327 19.75 9.2c0-4.37-3.45-7.95-7.75-7.95S4.25 4.83 4.25 9.2c0 3.127 1.95 5.517 3.762 7.07a18 18 0 0 0 3.344 2.249M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.205 19.977c.92.46 2.26.773 3.795.773s2.876-.313 3.795-.773c.98-.49 1.205-.981 1.205-1.227h2c0 1.411-1.118 2.42-2.31 3.016-1.252.626-2.912.984-4.69.984s-3.438-.358-4.69-.984C6.118 21.17 5 20.16 5 18.75h2c0 .246.225.737 1.205 1.227"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_05;
