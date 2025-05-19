import React from "react";
const Detergent: React.FC<
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
        d="M8.5 4.75a.75.75 0 0 0-.75.75v.066a4.25 4.25 0 0 1-.646 2.253l-.828 1.324a6.75 6.75 0 0 0-1.026 3.578V21c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 18.75 21v-9.477a6.797 6.797 0 0 0-6.182-6.77L12.5 4.75zm6.963 7.126c.697-.407.718-1.688.048-2.862s-1.778-1.796-2.474-1.39-.718 1.688-.048 2.862 1.778 1.796 2.474 1.39"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.5 1.25A1.75 1.75 0 0 0 7.75 3v.75h4.75q.08 0 .158.007.3.027.592.077V3a1.75 1.75 0 0 0-1.75-1.75z"
      />
    </svg>
  );
};
export default Detergent;
