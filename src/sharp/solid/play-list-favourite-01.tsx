import React from "react";
const PlayListFavourite_01: React.FC<
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
        d="M17.019 13.981c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.575-.393 2.606.142 1.332.69 1.931 2.307 1.541 3.896-.4 1.625-1.794 3.204-4.375 4.138l-.256.093-.257-.093c-2.58-.934-3.975-2.513-4.375-4.138-.39-1.589.21-3.206 1.542-3.896 1.03-.535 1.953-.412 2.605-.142M8.232 1.75H2.5a.75.75 0 0 0-.75.75v3.25h4.303zM7.76 5.75h5.292l2.18-4H9.94zM16.94 1.75l-2.18 4h6.489V2.5a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M1.749 7.25h19.5v5.523c-1.435-.73-2.776-.591-3.746-.214-.977-.38-2.332-.519-3.78.232-2.068 1.072-2.828 3.466-2.308 5.586.258 1.049.803 2.024 1.61 2.873H2.5a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PlayListFavourite_01;
