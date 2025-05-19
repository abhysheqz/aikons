import React from "react";
const Robot_02: React.FC<
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
        d="M12 4.225c.428 0 .775.347.775.775v3a.775.775 0 0 1-1.55 0V5c0-.428.347-.775.775-.775"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.725 3.5a2.275 2.275 0 1 1 4.55 0 2.275 2.275 0 0 1-4.55 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.225 16a8.775 8.775 0 0 1 17.55 0v1.75H15.9a.93.93 0 0 1-.777-.416 2.43 2.43 0 0 0-2.025-1.084H10.9c-.813 0-1.574.407-2.025 1.084a.93.93 0 0 1-.777.416H3.225zM15.9 19.25h4.857a3.6 3.6 0 0 1-.07.552 3.78 3.78 0 0 1-2.886 2.887c-.398.086-.857.086-1.524.086H7.721c-.667 0-1.126 0-1.524-.086a3.78 3.78 0 0 1-2.886-2.887 3.6 3.6 0 0 1-.07-.552h4.858c.813 0 1.574-.406 2.025-1.084a.93.93 0 0 1 .777-.416H13.1c.312 0 .604.157.777.416A2.43 2.43 0 0 0 15.9 19.25M9.75 13a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_02;
