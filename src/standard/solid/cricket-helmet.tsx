import React from "react";
const CricketHelmet: React.FC<
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
        d="M11.5 2.25c4.012 0 7.917 2.317 9.678 5.746l.335-.136a1 1 0 0 1 .755 1.852l-.812.33-4.382 1.846.56 3.545 4.267-.428a1 1 0 0 1 .199 1.99l-.6.06V20h.5a1 1 0 0 1 0 2h-2.79a3 3 0 0 1-2.964-2.532l-.329-2.085a3 3 0 0 1-.477-.176 6.3 6.3 0 0 1-1.032-.616l.496 1.589a2.75 2.75 0 0 1-2.624 3.57H9.27c-1.569 0-3.32-.32-4.621-1.511A10.54 10.54 0 0 1 1.25 12.5c0-5.66 4.59-10.25 10.25-10.25m8 17.75v-2.744l-1.554.156.276 1.744a1 1 0 0 0 .987.844zm-5.177-6.568a2.24 2.24 0 0 1 .853-.74l.354 2.24a3.9 3.9 0 0 1-1.132-1.373 1 1 0 0 0-.075-.127M9.999 16a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CricketHelmet;
