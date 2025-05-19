import React from "react";
const EqualSign: React.FC<
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
        d="M20 9.25H4v-2.5h16zM20 17.25H4v-2.5h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EqualSign;
