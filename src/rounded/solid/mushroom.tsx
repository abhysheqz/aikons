import React from "react";
const Mushroom: React.FC<
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
        d="M12.015 1.25c-4.942 0-9.165 2.832-9.74 7.693a3.17 3.17 0 0 0 .768 2.52c.571.662 1.393 1.139 2.311 1.48 1.836.68 4.28.897 6.666.775 2.39-.122 4.816-.59 6.628-1.35.902-.378 1.703-.85 2.265-1.431.574-.594.939-1.35.812-2.225-.682-4.723-4.849-7.462-9.71-7.462M16 5c.825 0 1.567.403 2.082.918S19 7.175 19 8a1 1 0 1 1-2 0c0-.175-.098-.433-.332-.668S16.175 7 16 7a1 1 0 1 1 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.806 14.937c.27-.042.404-.063.502.006.099.069.125.196.176.45.133.654.225 1.346.255 2.028.04.928-.03 1.887-.298 2.735-.27.85-.758 1.64-1.584 2.121-2.26 1.313-5.084-.225-5.569-2.868-.131-.715.098-1.34.367-1.844.135-.254.292-.5.44-.727l.078-.119c.124-.189.24-.367.35-.552q.15-.25.261-.488c.105-.228.157-.342.232-.39s.186-.046.406-.042a26.493 26.493 0 0 0 4.384-.31"
      />
    </svg>
  );
};
export default Mushroom;
