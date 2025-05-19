import React from "react";
const BalanceScale: React.FC<
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
        d="M18.5 7.25a.75.75 0 0 0-.692.462l-2.5 6a.8.8 0 0 0-.058.288 3.75 3.75 0 1 0 7.5 0 .8.8 0 0 0-.058-.289l-2.5-6a.75.75 0 0 0-.692-.461zm-1.375 6L19 8.75l1.875 4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.75a1 1 0 0 1 1 1v13h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4v-13a1 1 0 0 1 1-1M3 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m10 0a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 7.25a.75.75 0 0 0-.692.462l-2.5 6A.8.8 0 0 0 1.25 14a3.75 3.75 0 1 0 7.5 0 .8.8 0 0 0-.058-.289l-2.5-6A.75.75 0 0 0 5.5 7.25zm-1.375 6L5 8.75l1.875 4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BalanceScale;
