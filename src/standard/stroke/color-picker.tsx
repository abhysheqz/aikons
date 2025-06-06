import React from "react";
const ColorPicker: React.FC<
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
        d="m13 4 1.5 1.5M20 11l-1.5-1.5m-4-4 1.086-1.086a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L18.5 9.5m-4-4 4 4M12.5 7.5l-9.914 9.914A2 2 0 0 0 2 18.828V22h3.172a2 2 0 0 0 1.414-.586L16.5 11.5M6 14h8"
      />
    </svg>
  );
};
export default ColorPicker;
