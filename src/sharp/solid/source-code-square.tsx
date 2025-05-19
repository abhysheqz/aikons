import React from "react";
const SourceCodeSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm10.33 5.415-4 8 1.34.67 4-8zm-4.3 2.366L7.97 8.97 4.94 12l3.03 3.03 1.06-1.06L7.06 12zm5.94 0L16.94 12l-1.97 1.97 1.06 1.06L19.06 12l-3.03-3.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCodeSquare;
