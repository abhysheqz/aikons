import React from "react";
const PyramidMaslowo: React.FC<
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
        d="M7.75 7.567C9.67 4.522 10.63 3 12 3s2.33 1.522 4.25 4.567l2.244 3.56c2.742 4.35 4.113 6.525 3.249 8.2C20.878 21 18.383 21 13.394 21h-2.788c-4.99 0-7.484 0-8.349-1.674-.864-1.674.507-3.849 3.249-8.199z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 15H9m11.5 0H15M7 9h10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v12"
      />
    </svg>
  );
};
export default PyramidMaslowo;
