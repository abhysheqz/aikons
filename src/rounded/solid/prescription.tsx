import React from "react";
const Prescription: React.FC<
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
        d="M9.293 11.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414l-9-9a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.057 4.204C6.022 4.362 6 4.608 6 5v6h3.5a3.5 3.5 0 1 0 0-7H7c-.392 0-.638.022-.796.057a1 1 0 0 0-.114.033 1 1 0 0 0-.033.114M6 13h3.5a5.5 5.5 0 1 0 0-11H7c-.435 0-.853.021-1.225.103-.383.084-.779.246-1.103.57s-.485.719-.569 1.102C4.021 4.147 4 4.565 4 5v14a1 1 0 1 0 2 0zM19.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prescription;
