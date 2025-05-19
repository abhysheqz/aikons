import React from "react";
const PictureInPictureOn: React.FC<
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
        d="M13 14.75c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 13 18.75zM11 13.75a.75.75 0 0 0 .75-.75V9.492a.75.75 0 0 0-1.282-.529l-1.042 1.049-2.719-2.72a1 1 0 0 0-1.414 1.415l2.722 2.723L6.98 12.47a.75.75 0 0 0 .532 1.28z"
      />
    </svg>
  );
};
export default PictureInPictureOn;
