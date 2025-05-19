import React from "react";
const House_01: React.FC<
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
        d="M13.31 2.683a.75.75 0 1 0-.62-1.366l-11 5a.75.75 0 0 0 .56 1.39v14.287c0 .415.336.75.75.75l9 .006a.75.75 0 0 0 .75-.75V2.938zM6.501 9.998a1 1 0 0 0-.002 2l2 .002a1 1 0 1 0 .002-2zm-.001 4a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zM13.906 22.75h2.842v-3.052a.75.75 0 0 1 1.5 0v3.0519999999999996h2.75a.75.75 0 0 0 .75-.75v-9.293a.75.75 0 0 0 .529-1.403l-.985-.394-.032-.013-2.512-1.005V8a.75.75 0 0 0-1.5 0v1.292l-3.2-1.28V22c0 .26-.049.513-.142.75m2.594-9.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_01;
