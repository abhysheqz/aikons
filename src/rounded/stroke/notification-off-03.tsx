import React from "react";
const NotificationOff_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.829c-4.181 1.08-9.26.856-13.068-.675-1.164-.468-2.115-1.407-1.902-2.76.13-.832.777-1.524 1.256-2.2.627-.897.689-1.874.69-2.915 0-1.338.373-2.702 1.024-3.779M7.5 3.5A7.6 7.6 0 0 1 12.051 2c4.134 0 7.484 3.26 7.484 7.28 0 1.04.063 2.018.686 2.914.477.676 1.12 1.368 1.25 2.2.137.884-.218 1.591-.804 2.106"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 22 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1"
      />
    </svg>
  );
};
export default NotificationOff_03;
