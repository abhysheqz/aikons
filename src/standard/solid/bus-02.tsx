import React from "react";
const Bus_02: React.FC<
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
        d="M6.5 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m11 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6.48c2.115.505 4.342.77 6.5.77 2.172 0 5.189-.327 7.5-.798V5a2 2 0 0 0-2-2zM5.25 15.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm4.748 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm8.252 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.848 9.47a1 1 0 0 1-.318 1.378l-1.046.654a1 1 0 0 0-.398.476l-.157.393a1 1 0 1 1-1.857-.742l.157-.393a3 3 0 0 1 1.195-1.43l1.046-.654a1 1 0 0 1 1.378.318M1.152 9.47a1 1 0 0 1 1.378-.318l1.046.654a3 3 0 0 1 1.195 1.43l.157.393a1 1 0 0 1-1.856.742l-.158-.393a1 1 0 0 0-.398-.476l-1.046-.654a1 1 0 0 1-.318-1.378"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bus_02;
