import React from "react";
const KeyframesDouble: React.FC<
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
        d="M16.981 4.012a2.965 2.965 0 0 0-3.363-.788 1 1 0 0 0 .764 1.849.965.965 0 0 1 1.097.259l5.27 5.997c.335.382.335.96 0 1.341l-5.27 5.998a.965.965 0 0 1-1.097.259 1 1 0 0 0-.764 1.849 2.965 2.965 0 0 0 3.363-.788l5.27-5.998a3.02 3.02 0 0 0 0-3.98zm-5.688.165a2.715 2.715 0 0 0-4.086 0l-5.27 5.998a2.77 2.77 0 0 0 0 3.65l5.27 5.998a2.715 2.715 0 0 0 4.086 0l5.27-5.998a2.77 2.77 0 0 0 0-3.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframesDouble;
