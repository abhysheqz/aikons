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
        d="m21.135 8.183-.352.353.757.757a1 1 0 1 1-1.415 1.414l-6.832-6.832a1 1 0 0 1 1.414-1.415l.757.757.353-.352a2.95 2.95 0 0 1 4.175 0l1.143 1.143a2.95 2.95 0 0 1 0 4.175M13.707 7.707a1 1 0 0 0-1.414-1.414L1.879 16.707A3 3 0 0 0 1 18.828V22a1 1 0 0 0 1 1h3.172a3 3 0 0 0 2.12-.879l10.415-10.414a1 1 0 0 0-1.414-1.414L13.586 13H8.414z"
      />
    </svg>
  );
};
export default ColorPicker;
