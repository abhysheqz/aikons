import React from "react";
const CameraAdd_01: React.FC<
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
        d="M1.772 5.978a.75.75 0 0 1 .748-.727h4.405l.998-4h8.153l.997 4h5.13l.546 17.5H1.25zM13 5h-2v2h2zm0 14v-3h3v-2h-3v-3h-2v3H8v2h3v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraAdd_01;
