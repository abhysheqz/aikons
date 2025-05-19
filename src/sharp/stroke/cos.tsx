import React from "react";
const Cos: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9.5a2.5 2.5 0 0 1 5 0v5a2.5 2.5 0 0 1-5 0zM21.69 8.616C21.264 7.652 20.443 7 19.5 7H19c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5h1c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5h-.5c-1.025 0-1.906-.771-2.292-1.875M7 8.314C6.55 7.532 5.67 7 4.659 7 3.19 7 2 8.12 2 9.5v5C2 15.88 3.19 17 4.659 17 5.67 17 6.55 16.468 7 15.686"
      />
    </svg>
  );
};
export default Cos;
