import React from "react";
const Home_09: React.FC<
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
        d="M13.703 2.387a2.75 2.75 0 0 0-3.405 0l-7 5.519a2.75 2.75 0 0 0-1.048 2.16V20A2.75 2.75 0 0 0 5 22.75h3.25L8.253 17c0-.967.784-1.75 1.75-1.75H14c.966 0 1.75.784 1.75 1.75v5.75H19A2.75 2.75 0 0 0 21.75 20v-9.935a2.75 2.75 0 0 0-1.047-2.16zm.547 20.363V17a.25.25 0 0 0-.25-.25h-3.997a.25.25 0 0 0-.25.25l-.003 5.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_09;
