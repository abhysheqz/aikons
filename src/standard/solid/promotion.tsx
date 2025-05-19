import React from "react";
const Promotion: React.FC<
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
        d="M19.504 2.37c-.744-.964-2.018-1.145-3.027-.713L8.25 5.177v8.26l8.172 3.531c1.026.443 2.305.247 3.061-.705 1.525-1.919 2.267-4.075 2.267-7.468q0-.03-.002-.06c-.21-2.618-.914-4.641-2.244-6.365M6.75 13.05V5.56H5a2.75 2.75 0 0 0-2.75 2.75V10.3A2.75 2.75 0 0 0 5 13.05zm.73 1.585a.75.75 0 0 0-1.255.554v2.4c0 .646.227 1.271.642 1.766L9.3 22.26a.85.85 0 0 0 1.25.057l2.905-2.885a.82.82 0 0 0 .226-.757.87.87 0 0 0-.273-.458 1.3 1.3 0 0 0-.418-.24l-2.769-.973a1.3 1.3 0 0 1-.428-.256z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Promotion;
