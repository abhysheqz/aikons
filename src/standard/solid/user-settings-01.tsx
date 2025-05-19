import React from "react";
const UserSettings_01: React.FC<
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
        d="M17.75 12.25a1 1 0 0 1 1 1v.645a3.5 3.5 0 0 1 1.416.823l.588-.336a1 1 0 0 1 .992 1.736l-.587.336a3.5 3.5 0 0 1 0 1.592l.587.336a1 1 0 0 1-.992 1.736l-.588-.336a3.5 3.5 0 0 1-1.416.823v.645a1 1 0 1 1-2 0v-.645a3.5 3.5 0 0 1-1.416-.823l-.588.336a1 1 0 0 1-.992-1.736l.587-.336a3.5 3.5 0 0 1 0-1.592l-.587-.336a1 1 0 0 1 .992-1.736l.588.336a3.5 3.5 0 0 1 1.416-.823v-.645a1 1 0 0 1 1-1m0 3.5a1.5 1.5 0 1 0 0 3 1.499 1.499 0 1 0 0-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.234 20.25H2.5a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 1.75a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 2.538 1.097 2.25 2.25 0 0 0-.791 4.075v.256a2.25 2.25 0 0 0-.768 2.872"
      />
    </svg>
  );
};
export default UserSettings_01;
