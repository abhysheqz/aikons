import React from "react";
const ChartLineData_03: React.FC<
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
        d="M2 21a1 1 0 0 0 1 1c2.376 0 3.983-1.16 5.139-2.758 1.059-1.465 1.789-3.368 2.465-5.13l.097-.253c.731-1.904 1.422-3.633 2.407-4.902C14.045 7.749 15.214 7 16.978 7c1.434 0 2.38.748 3.207 1.913a1 1 0 0 0 1.63-1.159C20.792 6.315 19.318 5 16.978 5c-2.49 0-4.206 1.126-5.45 2.73-1.198 1.544-1.984 3.565-2.694 5.411l-.051.135c-.717 1.864-1.363 3.547-2.265 4.794C5.64 19.284 4.584 20 3 20a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartLineData_03;
