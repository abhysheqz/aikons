import React from "react";
const Pound: React.FC<
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
        d="M12.5 4a4.5 4.5 0 1 0 0 9H15a1 1 0 1 1 0 2h-3.725c-.814 1.776-1.89 3.595-3.255 5h8.856l.04-.001q.059-.002.179-.013c.16-.015.387-.045.646-.106.534-.124 1.128-.359 1.577-.778a1 1 0 1 1 1.364 1.462c-.801.748-1.77 1.097-2.486 1.264a7 7 0 0 1-.916.15 6 6 0 0 1-.405.022H5a1 1 0 0 1-.423-1.906C6.37 19.258 7.886 17.299 9.055 15H4a1 1 0 1 1 0-2h3.81A6.5 6.5 0 1 1 19 8.5a1 1 0 1 1-2 0A4.5 4.5 0 0 0 12.5 4"
      />
    </svg>
  );
};
export default Pound;
