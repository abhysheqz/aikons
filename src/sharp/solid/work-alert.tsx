import React from "react";
const WorkAlert: React.FC<
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
        d="M7.241 1.91a.95.95 0 0 1 .918-.66h6.682c.426 0 .8.27.918.66l.954 3.181c.145.483-.149.986-.655 1.124-.507.138-1.036-.142-1.18-.625l-.757-2.522H8.879L8.123 5.59c-.145.483-.674.763-1.18.625-.507-.138-.8-.641-.656-1.124zM17.5 12.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.758 5.248-.008-2.5-1.5.005.008 2.5zm0 1.277H16.75v1.5h1.508z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 4.75a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h10.256a6.75 6.75 0 0 1 9.494-9.494V5.5a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default WorkAlert;
