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
        d="M12.5 4.75H7.75v.816a4.25 4.25 0 0 1-.646 2.253l-.828 1.324a6.75 6.75 0 0 0-1.026 3.578V22.75h13.5V11.523a6.797 6.797 0 0 0-6.182-6.77zm2.963 7.126c.697-.407.718-1.688.048-2.862s-1.778-1.796-2.474-1.39-.718 1.688-.048 2.862 1.778 1.796 2.474 1.39"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M7.75 1.25v2.5h5.5v-2.5z" />
    </svg>
  );
};
export default Detergent;
