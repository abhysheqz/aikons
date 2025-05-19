import React from "react";
const SalahTime: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 4.995C14.235 3.185 11.879 2 9.5 2c-3.866 0-7 3.129-7 6.988 0 3.691 2.867 6.732 6.5 6.988"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 5.993v3.494l-2 1.498M12.67 15.43c-2.061-3.49.646-5.12 1.17-5.6.418-.385 2.01-1.296 2.657-1.879.548.505 2.333 1.544 2.65 1.86.319.315 3.388 2.169 1.164 5.62m-7.642 0h7.642m-7.642 0H10.5h12-2.19m-7.64 0v6.564h3.82m3.82-6.564v6.564h-3.82m0 0v-2.833"
      />
    </svg>
  );
};
export default SalahTime;
