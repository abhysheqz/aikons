import React from "react";
const Sleeping: React.FC<
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
        d="M16 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5a1 1 0 0 1-.293.707L18.914 6H21a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-.5a1 1 0 0 1 .293-.707L19.086 3H17a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.735 1.6c-.874-.228-1.79-.35-2.735-.35C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a10.8 10.8 0 0 0-.454-3.1c-.369.252-.815.4-1.296.4h-4A2.3 2.3 0 0 1 14.7 7v-.5a2.3 2.3 0 0 1 .674-1.626l.747-.748a2.3 2.3 0 0 1-1.386-2.525M6.97 9.97a.75.75 0 0 1 1.06 0c.18.18.423.28.677.28H10a.75.75 0 0 1 0 1.5H8.707a2.46 2.46 0 0 1-1.737-.72.75.75 0 0 1 0-1.06m10.06 0a.75.75 0 0 1 0 1.06c-.46.461-1.085.72-1.737.72H14a.75.75 0 0 1 0-1.5h1.293c.254 0 .497-.1.677-.28a.75.75 0 0 1 1.06 0M10.75 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M12 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sleeping;
