import React from "react";
const BitcoinShield: React.FC<
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
        d="M12.916 1.289a2.5 2.5 0 0 0-2.332 0C9.382 1.925 6.92 3.07 3.966 3.584 2.877 3.774 2 4.704 2 5.874V10.8c0 3.49 1.78 6.157 3.742 8.032 1.96 1.873 4.16 3.015 5.161 3.479a2 2 0 0 0 1.694 0c1.001-.465 3.2-1.606 5.16-3.479 1.963-1.875 3.743-4.541 3.743-8.032V5.873c0-1.168-.877-2.1-1.966-2.289-2.954-.513-5.416-1.659-6.618-2.295m-.416 6.46a.75.75 0 0 0-1.5 0V8H9.25a.75.75 0 0 0 0 1.5h.25V14h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 1 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 12.75 8h-.25zM11 11V9.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinShield;
