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
        fill="currentColor"
        d="m12.97 5.97 1.06 1.06-5.72 5.72h5.88l2.78-2.78 1.06 1.06L6.81 22.25H1.75v-5.06zM20.06 9l.97.97-1.061 1.06-7-7 1.06-1.06.97.97 2.251-2.19 5 5z"
      />
    </svg>
  );
};
export default ColorPicker;
