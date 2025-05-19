import React from "react";
const Twitch: React.FC<
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
        d="M4 2.25a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 .744.75l2.256.017V21a.75.75 0 0 0 1.307.502l3.812-4.23h5.64c.2 0 .393-.08.534-.222l2.99-3.023a.75.75 0 0 0 .217-.527V3a.75.75 0 0 0-.75-.75zM13.001 7a1 1 0 0 0-2 0L11 11a1 1 0 0 0 2 0zm4 0a1 1 0 0 0-2 0L15 11a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Twitch;
