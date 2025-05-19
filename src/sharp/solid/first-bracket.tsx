import React from "react";
const FirstBracket: React.FC<
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
        d="M18.283 2c2.736 2.196 4.468 5.904 4.468 10s-1.757 7.804-4.493 10l-1.565-1.95c2.086-1.674 3.558-4.632 3.558-8.05 0-3.417-1.447-6.376-3.533-8.05zM5.718 2C2.98 4.196 1.25 7.904 1.25 12s1.756 7.804 4.492 10l1.565-1.95C5.221 18.376 3.75 15.417 3.75 12s1.447-6.377 3.532-8.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstBracket;
