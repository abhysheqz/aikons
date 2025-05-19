import React from "react";
const Bread_04: React.FC<
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
        strokeWidth={1.5}
        d="M8.5 4C4.91 4 2 5.567 2 7.5c0 .992.766 1.887 1.998 2.524L3 20h11l-.998-9.976C14.234 9.387 15 8.492 15 7.5 15 5.567 12.09 4 8.5 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 20h9l-.998-9.976C21.234 9.387 22 8.492 22 7.5 22 5.567 19.09 4 15.5 4h-7"
      />
    </svg>
  );
};
export default Bread_04;
