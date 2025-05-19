import React from "react";
const Bullet: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.03 3.47a.75.75 0 0 0-.727-.194l-.007.002a23.213 23.213 0 0 0-2.249.78c-1 .408-2.223.993-3.18 1.748l3.827 3.828c.755-.958 1.34-2.181 1.748-3.182a23 23 0 0 0 .78-2.248l.002-.007a.75.75 0 0 0-.194-.727m-3.247 7.374-4.127-4.127-1.364.909-.06.045 4.597 4.597.045-.06zm-2.012 2.488-4.603-4.603-5.365 5.366a2.24 2.24 0 0 0-.656 1.468c-.535.03-1.06.248-1.469.657l-.708.708a.75.75 0 0 0 0 1.06L6.51 21.53a.75.75 0 0 0 1.061 0l.708-.708c.409-.408.627-.934.657-1.469a2.24 2.24 0 0 0 1.468-.656z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bullet;
