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
        d="M1.25 4.222c0-.537.438-.972.977-.972h19.546c.54 0 .977.435.977.972v7.292h-1.955v-6.32H3.205v13.612h7.818v1.944H2.227a.975.975 0 0 1-.977-.972z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.977 13.972h8.772v6.778h-8.772z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.16 7.139h5.372v1.944H8.496l3.217 3.202-1.382 1.375-3.216-3.201v2.027H5.16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PictureInPictureExit;
