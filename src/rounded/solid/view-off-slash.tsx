import React from "react";
const ViewOffSlash: React.FC<
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
        d="M12 4.25c-.994 0-1.935.17-2.813.455a.75.75 0 0 0-.3 1.244l10.022 10.02a.75.75 0 0 0 1.058.002 21 21 0 0 0 2.24-2.655c.254-.352.543-.754.543-1.316s-.342-1.038-.595-1.39c-.706-.99-1.968-2.564-3.675-3.897S14.57 4.25 12 4.25M7.278 6.217a.75.75 0 0 0-.95-.091c-2.122 1.43-3.726 3.422-4.536 4.558-.253.352-.542.754-.542 1.316s.342 1.038.595 1.39c.706.99 1.968 2.564 3.675 3.897S9.43 19.75 12 19.75c2.183 0 4.102-.817 5.672-1.876a.75.75 0 0 0 .11-1.152zM9.529 9.5a3.515 3.515 0 0 0 4.97 4.97z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ViewOffSlash;
