import React from "react";
const Departement: React.FC<
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
        d="M12.98 1.29a2.75 2.75 0 0 0-2.46 0l-7 3.5A2.75 2.75 0 0 0 2 7.25v12.5a2.75 2.75 0 0 0 2.75 2.75h14a2.75 2.75 0 0 0 2.75-2.75V7.25a2.75 2.75 0 0 0-1.52-2.46zM7.75 7.75a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Departement;
