import React from "react";
const AddTeam: React.FC<
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
        d="M4.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M1.25 18.286c0-2.837 2.472-5.036 5.393-5.036h3.714q.59.001 1.15.116c.64.13.96.195 1.298.61.338.413.338.86.338 1.752v2.022c0 1.414 0 2.121-.44 2.56-.438.44-1.146.44-2.56.44H3.857c-1.382 0-2.607-1.048-2.607-2.464"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 12.75a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.5 11.632a4.25 4.25 0 1 0 0-8.263A5.73 5.73 0 0 1 14.25 7.5a5.73 5.73 0 0 1-1.75 4.132"
      />
    </svg>
  );
};
export default AddTeam;
