import React from "react";
const Home_03: React.FC<
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
        d="M13.579 2.189a2.75 2.75 0 0 0-3.154 0L2.632 7.641a2.75 2.75 0 0 0-1.123 2.773L3.453 20.52a2.75 2.75 0 0 0 2.7 2.23H8.25L8.252 17c0-.967.783-1.75 1.75-1.75h3.997c.966 0 1.75.783 1.75 1.75l.001 5.75h2.1a2.75 2.75 0 0 0 2.7-2.23l1.944-10.105a2.75 2.75 0 0 0-1.124-2.773zm.671 20.561L14.249 17a.25.25 0 0 0-.25-.25h-3.997a.25.25 0 0 0-.25.25l-.002 5.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_03;
