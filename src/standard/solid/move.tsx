import React from "react";
const Move: React.FC<
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
        d="M11.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414L13 5.414V9a1 1 0 1 1-2 0V5.414l-.793.793a1 1 0 0 1-1.414-1.414zM12 13.5a1 1 0 0 1 1 1v4.086l.793-.793a1 1 0 0 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414l.793.793V14.5a1 1 0 0 1 1-1M17.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H15a1 1 0 0 1 0-2h3.586l-.793-.793a1 1 0 0 1 0-1.414M6.207 8.793a1 1 0 0 1 0 1.414L5.414 11H9a1 1 0 1 1 0 2H5.414l.793.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Move;
