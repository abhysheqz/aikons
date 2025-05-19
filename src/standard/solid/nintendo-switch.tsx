import React from "react";
const NintendoSwitch: React.FC<
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
        d="M6 1.25A4.75 4.75 0 0 0 1.25 6v8A4.75 4.75 0 0 0 6 18.75h3.5A1.75 1.75 0 0 0 11.25 17V3A1.75 1.75 0 0 0 9.5 1.25zM6 13a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm.25-8.25A.75.75 0 0 1 7 5.5v.75h.75a.75.75 0 0 1 0 1.5H7v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V5.5a.75.75 0 0 1 .75-.75m8.25.5A1.75 1.75 0 0 0 12.75 7v14c0 .966.784 1.75 1.75 1.75H18A4.75 4.75 0 0 0 22.75 18v-8A4.75 4.75 0 0 0 18 5.25zM17.742 9a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm.008 5.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5H17v-.75a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NintendoSwitch;
