import React from "react";
const CalendarLove_01: React.FC<
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
        d="M12.25 17.113c0-1.52 1.119-2.863 2.75-2.863.928 0 1.583.378 2 .769.417-.391 1.072-.769 2-.769 1.631 0 2.75 1.343 2.75 2.863 0 1.828-1.217 3.223-2.268 4.096-.54.45-1.077.796-1.477 1.029-.2.117-1.005.512-1.005.512s-.805-.395-1.005-.512c-.4-.233-.937-.58-1.477-1.029-1.05-.873-2.268-2.268-2.268-4.096"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V13H19.8V9.75H4.2v11.046H12v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarLove_01;
