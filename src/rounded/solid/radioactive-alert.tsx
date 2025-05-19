import React from "react";
const RadioactiveAlert: React.FC<
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
        d="M9.8 2.4a1 1 0 0 1-.2 1.4 4 4 0 1 0 4.799 0 1 1 0 1 1 1.202-1.6A6 6 0 0 1 18 7c0 1.094-.293 2.12-.805 3.003 1.884.06 3.548.99 4.605 2.396a1 1 0 0 1-1.6 1.202 4 4 0 1 0 0 4.799 1 1 0 0 1 1.6 1.2A6 6 0 0 1 17 22a6 6 0 0 1-5-2.682A6 6 0 0 1 7 22a6 6 0 0 1-4.8-2.399A1 1 0 0 1 3.8 18.4a4 4 0 1 0 0-4.8 1 1 0 0 1-1.6-1.2 6 6 0 0 1 4.604-2.397A6 6 0 0 1 6 7c0-1.963.944-3.707 2.4-4.8a1 1 0 0 1 1.4.2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RadioactiveAlert;
