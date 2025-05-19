import React from "react";
const IdNotVerified: React.FC<
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
        d="M18 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.97 2.72-.972.97-.968-.97-1.061 1.06.969.97-.97.97 1.062 1.06.968-.969.971.97 1.06-1.061-.97-.97.97-.969z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 1.25a.75.75 0 0 0-.728.568L7.414 3.25H2a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h11.938a6.25 6.25 0 0 1-1.94-3H6.25v-2.044l.2-.216c1.427-1.537 3.673-2.086 5.64-1.526a6.253 6.253 0 0 1 7.66-3.966V4a.75.75 0 0 0-.75-.75h-5.414l-.358-1.432a.75.75 0 0 0-.728-.568zm4.04 4H8.46l.626-2.5h2.828zM7.795 12c0-1.5 1.189-2.75 2.697-2.75s2.698 1.25 2.698 2.75-1.19 2.75-2.698 2.75S7.796 13.5 7.796 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IdNotVerified;
