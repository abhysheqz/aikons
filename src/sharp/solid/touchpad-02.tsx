import React from "react";
const Touchpad_02: React.FC<
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
        d="M1.25 2.222c0-.537.438-.972.977-.972h19.546c.54 0 .977.435.977.972v7.78h-1.954V3.194H3.204v13.61h3.909v1.945H2.227a.975.975 0 0 1-.977-.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.429 7.412c0-1.184.95-2.162 2.143-2.162s2.143.977 2.143 2.16l.003 4.428h2.96c1.706 0 3.072 1.4 3.072 3.103v4.706c0 1.704-1.366 3.103-3.071 3.103h-6.413l-4.543-6.115a2.25 2.25 0 0 1-.003-2.755 2.15 2.15 0 0 1 3.128-.299l.002.002.579.512z"
      />
    </svg>
  );
};
export default Touchpad_02;
