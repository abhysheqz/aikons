import React from "react";
const BitcoinCreditCard: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75V6.5a.5.5 0 0 0 .5.5H22a.5.5 0 0 0 .5-.5V4.75A2.75 2.75 0 0 0 19.75 2zM1 9a.5.5 0 0 1 .5-.5H22a.5.5 0 0 1 .5.5v7.75c0 .59-.185 1.135-.5 1.583v-.083c0-.533-.111-1.04-.312-1.5a3.752 3.752 0 0 0-2.492-5.13 2.25 2.25 0 0 0-3.817-.12h-.629a2.25 2.25 0 0 0-1.25 4.121v2.258a2.25 2.25 0 0 0-.986 1.621H3.75A2.75 2.75 0 0 1 1 16.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 12.75a.75.75 0 0 0-1.5 0V13h-1.75a.75.75 0 0 0 0 1.5H15V19h-.25a.75.75 0 0 0 0 1.5h1.75v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 18.25 13H18zM16.5 16v-1.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H16.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinCreditCard;
