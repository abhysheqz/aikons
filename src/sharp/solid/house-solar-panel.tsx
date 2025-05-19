import React from "react";
const HouseSolarPanel: React.FC<
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
        d="M3.498 18.996V10h2v7.997L7 18l-.004 2-2.5-.004a1 1 0 0 1-.998-1m17-8.996v9a1 1 0 0 1-1 1h-2.5v-2h1.5v-8zM12.198 13.548l1.6 1.2-1.8 2.4h4.007L11.78 22.75l-1.597-1.204 1.808-2.398H7.996z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.14 10.75H9.852l.334-4h3.62zM13.682 5.25H10.31l.333-4h2.704zM15.31 6.75l.334 4H21a.75.75 0 0 0 .702-1.013l-1.12-2.987zM20.02 5.25h-4.834l-.334-4h3.668zM8.807 5.25l.333-4H5.48l-1.5 4zM3.417 6.75 2.296 9.736a.75.75 0 0 0 .702 1.014h5.35l.334-4z"
      />
    </svg>
  );
};
export default HouseSolarPanel;
