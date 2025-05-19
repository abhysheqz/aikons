import React from "react";
const LayerSendToBack: React.FC<
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
        d="m23 6.75-11-5.5-11 5.5 8.75 4.375v-5.04h4.5v5.04zm-8 10.172 1.414 1.414L12 22.75l-4.414-4.414L9 16.922l2 2V7.336h2v11.586zM5.824 10.84l3.926 1.963v1.601L7.6 16.552 1 13.252zM23 13.252l-6.602 3.3-2.148-2.148v-1.601l3.926-1.963z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerSendToBack;
