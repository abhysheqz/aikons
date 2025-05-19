import React from "react";
const Location_02: React.FC<
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
        d="M11.69 22.683a23 23 0 0 1-.412-.198 22.783 22.783 0 0 1-4.258-2.784C4.71 17.777 2.25 14.836 2.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 3.836-2.46 6.777-4.77 8.701a22.8 22.8 0 0 1-4.56 2.931l-.112.052-.003.001a.75.75 0 0 1-.61 0z"
      />
    </svg>
  );
};
export default Location_02;
