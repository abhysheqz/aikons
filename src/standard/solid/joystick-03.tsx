import React from "react";
const Joystick_03: React.FC<
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
        d="M7.996 1.252a3.75 3.75 0 0 0-1 7.365v6.664c-.441.034-.825.105-1.19.256-.692.287-1.226.822-1.996 1.591l-.803.805c-.472.495-.757 1.085-.757 2.2a2.75 2.75 0 0 0 2.617 2.616h14.266a2.75 2.75 0 0 0 2.617-2.616c0-1.075-.285-1.705-.757-2.2l-.803-.805c-.77-.77-1.304-1.304-1.996-1.59-.691-.287-1.447-.287-2.535-.286H8.996V8.617a3.752 3.752 0 0 0-1-7.365m10 11.75a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Joystick_03;
