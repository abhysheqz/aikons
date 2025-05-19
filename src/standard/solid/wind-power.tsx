import React from "react";
const WindPower: React.FC<
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
        d="M9.75 11a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M7.822 2.93a1 1 0 0 1-.253 1.392c-1.875 1.298-3.286 3.438-3.576 5.8a1 1 0 1 1-1.986-.244c.366-2.977 2.122-5.607 4.424-7.2a1 1 0 0 1 1.391.253m8.356 0a1 1 0 0 1 1.391-.252c2.302 1.593 4.058 4.223 4.424 7.2a1 1 0 1 1-1.986.244c-.29-2.362-1.701-4.502-3.576-5.8a1 1 0 0 1-.253-1.391"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.444 1.497A.75.75 0 0 1 10 1.25h4a.75.75 0 0 1 .746.825l-.41 4.1a1.75 1.75 0 0 1-1.741 1.575h-1.19a1.75 1.75 0 0 1-1.741-1.576l-.41-4.1a.75.75 0 0 1 .19-.577M15.4 12.373a1.75 1.75 0 0 1 2.212-.698l3.692 1.64a.75.75 0 0 1 .346 1.058l-2 3.5a.75.75 0 0 1-1.101.228l-3.279-2.46a1.75 1.75 0 0 1-.45-2.3zM8.6 12.373a1.75 1.75 0 0 0-2.212-.698l-3.692 1.64a.75.75 0 0 0-.346 1.058l2 3.5a.75.75 0 0 0 1.101.228l3.279-2.46a1.75 1.75 0 0 0 .45-2.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.672 13.5a1 1 0 0 1 .366-1.367l2.165-1.25a1 1 0 1 1 1 1.732l-2.165 1.25a1 1 0 0 1-1.366-.366M16.336 13.5a1 1 0 0 1-1.366.367l-2.165-1.25a1 1 0 0 1 1-1.732l2.165 1.25a1 1 0 0 1 .366 1.366"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-9.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 22a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WindPower;
