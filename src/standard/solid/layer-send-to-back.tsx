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
        d="M10.894 1.488a2.69 2.69 0 0 1 2.212 0l8.6 3.877c1.392.627 1.392 2.643 0 3.27l-7.456 3.361V7.75a2.25 2.25 0 0 0-4.5 0v4.246l-7.456-3.36c-1.392-.628-1.392-2.644 0-3.271zM12 6.75a1 1 0 0 1 1 1v11.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 19.336V7.75a1 1 0 0 1 1-1m-2.25 6.891-6.254-2.819-1.202.542c-1.392.627-1.392 2.644 0 3.27l5.276 2.379a2.25 2.25 0 0 1 2.18-.385zm6.68 3.372 5.276-2.378c1.392-.627 1.392-2.643 0-3.27l-1.202-.543-6.254 2.82v2.986a2.25 2.25 0 0 1 2.18.385"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerSendToBack;
