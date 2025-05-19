import React from "react";
const SourceCodeCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.33 6.415-4 8 1.34.67 4-8zm-4.3 2.366L7.97 8.97 4.94 12l3.03 3.03 1.06-1.06L7.06 12zm5.94 0L16.94 12l-1.97 1.97 1.06 1.06L19.06 12l-3.03-3.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCodeCircle;
