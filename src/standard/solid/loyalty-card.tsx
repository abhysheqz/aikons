import React from "react";
const LoyaltyCard: React.FC<
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
        d="M1.25 5.5A2.75 2.75 0 0 1 4 2.75h16a2.75 2.75 0 0 1 2.75 2.75v13A2.75 2.75 0 0 1 20 21.25H4a2.75 2.75 0 0 1-2.75-2.75zm7.25 5.651a3 3 0 0 0-.393-.195c-.589-.241-1.421-.35-2.348.124-1.212.619-1.755 2.069-1.402 3.486.362 1.449 1.616 2.83 3.891 3.64a.75.75 0 0 0 .504 0c2.275-.81 3.53-2.191 3.89-3.64.354-1.418-.19-2.867-1.4-3.486-.928-.473-1.76-.365-2.35-.124a3 3 0 0 0-.392.195M15 15.5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoyaltyCard;
