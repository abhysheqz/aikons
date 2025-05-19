import React from "react";
const PictureInPictureExit: React.FC<
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
        d="M3.932 4.944a.975.975 0 0 0-.977.973v11.666c0 .537.437.973.977.973h6.352c.54 0 .977.435.977.972a.975.975 0 0 1-.977.972H3.932A2.924 2.924 0 0 1 1 17.583V5.917A2.924 2.924 0 0 1 3.932 3h15.636A2.924 2.924 0 0 1 22.5 5.917v4.375a.975.975 0 0 1-.977.972.975.975 0 0 1-.978-.972V5.917a.975.975 0 0 0-.977-.973z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 14.75c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 13 18.75zM5.75 7a.75.75 0 0 0-.75.75v3.508a.75.75 0 0 0 1.282.529l1.042-1.048 2.719 2.718a1 1 0 0 0 1.414-1.414L8.735 9.321 9.77 8.279A.75.75 0 0 0 9.239 7z"
      />
    </svg>
  );
};
export default PictureInPictureExit;
