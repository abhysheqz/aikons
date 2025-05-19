import React from "react";
const Blockchain_05: React.FC<
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
        d="M12.106 1.09a.75.75 0 0 0-.712 0l-6.5 3.5a.75.75 0 0 0-.394.66v7c0 .276.151.53.394.66l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 0 0 .394-.66v-7a.75.75 0 0 0-.394-.66zM6 11.802V6.506l5 2.692v5.296zm6.5 2.692V9.198l5-2.692v5.296zM9.25 18a.75.75 0 0 0-.75.75v.75H4.75a.75.75 0 0 0 0 1.5H8.5v.75c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V21h3.75a.75.75 0 0 0 0-1.5H15v-.75a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_05;
