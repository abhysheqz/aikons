import React from "react";
const Navigation_03: React.FC<
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
        d="M20.416 3.66c1.885 1.87-1.132 17.065-4.228 17.333-2.597.225-3.406-4.898-3.953-6.521-.54-1.602-1.14-2.18-2.73-2.705-4.037-1.335-6.055-2.003-6.455-3.06-1.058-2.8 14.957-7.433 17.366-5.046"
      />
    </svg>
  );
};
export default Navigation_03;
