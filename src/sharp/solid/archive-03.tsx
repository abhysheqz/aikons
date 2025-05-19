import React from "react";
const Archive_03: React.FC<
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
        d="M5.662 2.25h12.675L21.75 6.8v14.95H2.25V6.8zm.975 1.95L5.175 6.15h13.65L17.363 4.2zM13 15.085V9.5h-2v5.586l-2-2L7.586 14.5 11 17.914V18h.086l.914.914.914-.914H13v-.086l3.414-3.414L15 13.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive_03;
