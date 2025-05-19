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
        d="M1.25 4.222c0-.537.438-.972.977-.972h19.546c.54 0 .977.435.977.972v7.292h-1.955v-6.32H3.205v13.612h7.818v1.944H2.227a.975.975 0 0 1-.977-.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.827 7.424 3.218 3.201V8.597H12v5.347H6.625V12h2.038L5.445 8.799z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.977 13.972h8.772v6.778h-8.772z" />
    </svg>
  );
};
export default PictureInPictureOn;
