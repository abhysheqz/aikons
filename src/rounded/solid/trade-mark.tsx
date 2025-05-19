import React from "react";
const TradeMark: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.5 9.232-1.407-1.29a4 4 0 0 0-.396-.288c-.134-.079-.497-.263-.908-.066-.412.198-.494.597-.517.751-.022.153-.022.34-.022.49V15.5a.75.75 0 0 0 1.5 0V10.91l1.242 1.143a.75.75 0 0 0 1.016 0l1.242-1.143v4.59a.75.75 0 0 0 1.5 0v-5.422c0-.15 0-.336-.022-.489-.023-.154-.105-.553-.517-.75-.411-.198-.773-.014-.908.065a4 4 0 0 0-.396.288zM6 8.75a.75.75 0 0 0 0 1.5h1.75v5.25a.75.75 0 0 0 1.5 0v-5.25H11a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TradeMark;
