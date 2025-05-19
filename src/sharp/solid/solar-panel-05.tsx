import React from "react";
const SolarPanel_05: React.FC<
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
        d="M9.878 7.25h4.244a2.25 2.25 0 0 0-4.244 0M8.25 8a3.75 3.75 0 0 1 7.5 0v.75h-7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 10.25v4H4.699l1.085-3.474a.75.75 0 0 1 .716-.526zM12.75 10.25v4h6.551l-1.085-3.474a.75.75 0 0 0-.716-.526zM19.77 15.75h-7.02v4H20a.75.75 0 0 0 .716-.974zM11.25 19.75v-4H4.23l-.946 3.026A.75.75 0 0 0 4 19.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 1.25v2h-1.5v-2zM16.75 7.25h2v1.5h-2zM7.25 8.75h-2v-1.5h2zM17.303 3.757l-1.414 1.415-1.061-1.061 1.414-1.414zM7.758 2.697l1.414 1.414-1.06 1.061-1.415-1.414z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M11.25 19.75h1.5v1.5h2v1.5h-5.5v-1.5h2z" />
    </svg>
  );
};
export default SolarPanel_05;
