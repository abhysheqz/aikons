import React from "react";
const Senseless: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.624 9.5s.629-1.104 0-1.409c-1.12-.543-2.587 1.471-.758 2.582C8.758 11.823 10 9.697 10 8.091M16.376 9.5s-.629 1.104 0 1.409c1.12.543 2.587-1.471.758-2.582C15.242 7.177 14 9.303 14 10.909M16 16.6l-.27-.2c-.718-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L8 16.658"
      />
    </svg>
  );
};
export default Senseless;
