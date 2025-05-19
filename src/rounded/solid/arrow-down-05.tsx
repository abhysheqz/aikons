import React from "react";
const ArrowDown_05: React.FC<
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
        d="M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 4a1 1 0 1 1 2 0v7h1.087c.38 0 .773 0 1.085.048.333.051.912.207 1.198.816.283.602.042 1.141-.133 1.433-.16.268-.41.566-.647.85l-.039.046c-.479.573-1.052 1.221-1.598 1.733-.271.255-.56.499-.844.685-.245.162-.647.389-1.109.389s-.863-.227-1.11-.389a6.5 6.5 0 0 1-.843-.685c-.546-.512-1.12-1.16-1.598-1.733l-.04-.047c-.237-.284-.485-.58-.646-.849-.175-.292-.416-.83-.133-1.433.286-.609.865-.765 1.198-.816C9.14 11 9.533 11 9.913 11H11z"
      />
    </svg>
  );
};
export default ArrowDown_05;
