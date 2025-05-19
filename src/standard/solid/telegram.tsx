import React from "react";
const Telegram: React.FC<
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
        d="M22.732 3.163a.75.75 0 0 0-1.011-.86l-20 8a.75.75 0 0 0-.08 1.355l5.18 2.826.94 5.64a.75.75 0 0 0 1.3.374l2.55-2.869-2.12-2.345a.75.75 0 0 1 .036-1.044l4.25-4.088.894-.914a.75.75 0 1 1 1.072 1.05l-.902.921-.016.016-3.734 3.592 3.145 3.48 3.234 3.233a.75.75 0 0 0 1.262-.367z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Telegram;
