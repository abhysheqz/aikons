import React from "react";
const Crown: React.FC<
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
        d="M5 22a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M12.654 1.632a.75.75 0 0 0-1.308 0L7.26 8.898 2.44 5.393a.75.75 0 0 0-1.165.802l3.5 13a.75.75 0 0 0 .724.555h13a.75.75 0 0 0 .724-.555l3.5-13a.75.75 0 0 0-1.165-.802L16.74 8.898zM12 13.5a1.5 1.5 0 0 0 0 3h.01a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crown;
