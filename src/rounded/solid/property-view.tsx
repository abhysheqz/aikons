import React from "react";
const PropertyView: React.FC<
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
        d="M17 14.25c-1.398 0-2.58.615-3.47 1.31-.893.698-1.578 1.557-1.942 2.068-.122.167-.338.463-.338.872s.216.705.338.872c.364.511 1.049 1.37 1.941 2.067.892.696 2.073 1.311 3.471 1.311s2.58-.615 3.47-1.31c.893-.698 1.578-1.557 1.942-2.068.122-.167.338-.463.338-.872s-.216-.705-.338-.872c-.364-.511-1.049-1.37-1.941-2.067-.892-.696-2.073-1.311-3.471-1.311M16.993 17c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5h.014c.824 0 1.493-.672 1.493-1.5s-.669-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.557 1.25h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.029.21-.043.316 0 .4q.035.065.095.108c.077.054.187.054.407.054h19.134c.22 0 .33 0 .407-.054a.3.3 0 0 0 .094-.108c.044-.084.03-.19.001-.4-.185-1.377-.572-2.469-1.43-3.327s-1.95-1.245-3.327-1.43c-1.343-.181-3.064-.181-5.255-.181m10.178 7.581c-.005-.273-.008-.41-.095-.495-.088-.086-.226-.086-.5-.086H1.86c-.274 0-.412 0-.5.086-.087.086-.09.222-.095.495-.015.786-.015 1.654-.015 2.612v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.04.14 2.42.172 4.008.179.603.003.905.004.988-.165.083-.168-.111-.416-.498-.912a12 12 0 0 1-.314-.42l-.012-.017c-.143-.194-.61-.829-.61-1.734s.467-1.54.61-1.735l.012-.015c.407-.57 1.187-1.553 2.234-2.371C13.65 13.564 15.15 12.75 17 12.75s3.35.814 4.394 1.629c.135.105.336.015.34-.157.016-.8.016-1.685.016-2.665v-.114c0-.958 0-1.826-.015-2.612M6 11.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyView;
