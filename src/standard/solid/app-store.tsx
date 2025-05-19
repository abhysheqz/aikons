import React from "react";
const AppStore: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.143 4.864a.75.75 0 1 0-1.286.772l.768 1.28-2.75 4.584H6.5a.75.75 0 0 0 0 1.5h.975l-1.118 1.864a.75.75 0 0 0 1.286.772l1.582-2.636H12.5a.75.75 0 0 0 0-1.5h-2.375l2.51-4.184.015-.026.993-1.654a.75.75 0 1 0-1.286-.772L12 7.21zm2.4 4a.75.75 0 0 0-1.286.772l3.6 6a.75.75 0 1 0 1.286-.772l-1.118-1.864h.975a.75.75 0 0 0 0-1.5h-1.875z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppStore;
