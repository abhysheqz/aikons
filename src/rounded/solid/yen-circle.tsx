import React from "react";
const YenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.733 7.34a.75.75 0 0 0-1.466.32c.212.968 1.074 3.072 2.983 4.274v.816H9.5a.75.75 0 1 0 0 1.5h1.75v2.25a.75.75 0 1 0 1.5 0v-2.25h1.75a.75.75 0 0 0 0-1.5h-1.75v-.816c1.91-1.202 2.772-3.306 2.983-4.274a.75.75 0 0 0-1.466-.32c-.161.741-.854 2.375-2.267 3.293-1.413-.918-2.105-2.552-2.267-3.293"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenCircle;
