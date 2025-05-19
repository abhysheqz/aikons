import React from "react";
const Satellite_03: React.FC<
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
        d="M10.81 2.534a.97.97 0 0 0-1.37 0L6.534 5.44a.97.97 0 0 0 0 1.37l2.049 2.049-1.448 1.448 6.558 6.558 1.448-1.448 2.049 2.05a.97.97 0 0 0 1.37 0l2.906-2.907a.97.97 0 0 0 0-1.37l-2.193-2.193a4.64 4.64 0 0 0-6.27-6.27zm.68 3.419L9.954 7.489 8.59 6.125l1.536-1.536zm6.386 9.458-1.364-1.364 1.536-1.536 1.364 1.364zM10.173 17.878c-2.066-.16-3.915-1.982-4.072-4.053l1.994-.15c.081 1.07 1.134 2.124 2.232 2.208zM4.25 19.767c-1.25-1.24-2.086-2.98-1.992-4.83l1.998.102c-.06 1.179.477 2.39 1.403 3.308.925.918 2.151 1.456 3.348 1.399l.096 1.997c-1.853.09-3.603-.736-4.853-1.976"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Satellite_03;
