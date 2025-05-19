import React from "react";
const BitcoinCloud: React.FC<
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
        d="M5.603 7.115a5.752 5.752 0 0 0 .596 11.359l.07.003 1.23.003a.5.5 0 0 0 .501-.5v-1.092a.57.57 0 0 0-.213-.428A2.25 2.25 0 0 1 9.25 12.5h.629a2.249 2.249 0 0 1 3.817.12 3.75 3.75 0 0 1 2.574 4.927.6.6 0 0 0 0 .406q.07.188.119.386c.023.092.104.16.199.16l.662.001a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 13.75a.75.75 0 0 0-1.5 0V14H9.25a.75.75 0 0 0 0 1.5h.25V20h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 12.75 14h-.25zM11 17v-1.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinCloud;
