import React from "react";
const Joystick_05: React.FC<
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
        d="M13.481 13.25H10.52c-1.167 0-1.978-.001-2.709.325-.73.325-1.272.928-2.052 1.796L4.3 16.99a3.75 3.75 0 0 0-1.046 2.43 9 9 0 0 0-.004.361c0 .202 0 .357.014.496a2.75 2.75 0 0 0 2.46 2.46c.138.013.294.013.495.013h11.562c.202 0 .357 0 .496-.014a2.75 2.75 0 0 0 2.46-2.46 5 5 0 0 0 .013-.495c0-.13 0-.273-.004-.361a3.75 3.75 0 0 0-1.046-2.43l-1.457-1.62c-.78-.867-1.323-1.47-2.053-1.795-.731-.326-1.542-.325-2.709-.325m-3.481 5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default Joystick_05;
