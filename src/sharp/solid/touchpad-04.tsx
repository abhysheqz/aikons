import React from "react";
const Touchpad_04: React.FC<
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
        d="M8.583 14.125a1.396 1.396 0 0 0-2.036.109 1.29 1.29 0 0 0-.026 1.614l.013.016 4.26 6.886h9.305c1.479 0 2.65-1.132 2.65-2.497v-6.27c0-.567-.488-1.05-1.122-1.05H20.41v1.506h-.808v-1.421a1 1 0 0 0-.062-.346c-.15-.403-.564-.704-1.061-.704l-1.216.002v1.936h-.808v-1.853a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704h-1.216v1.938h-.808V6.509a1.258 1.258 0 0 0-2.516 0v9.935z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2.222c0-.537.438-.972.977-.972h19.546c.54 0 .977.435.977.972v7.788h-1.954V3.194H3.204v13.612h1.954v1.944H2.227a.975.975 0 0 1-.977-.972z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touchpad_04;
