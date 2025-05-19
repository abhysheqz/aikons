import React from "react";
const Lamp_05: React.FC<
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
        d="M10.308 1.25a2.75 2.75 0 0 0-2.52 1.648l-2.362 5.4a1.75 1.75 0 0 0 1.603 2.452H11v2.5H8.5a.75.75 0 0 0 0 1.5h.506c.238.639.264 1.206-.03 1.82l-.806 1.68h7.658l-.806-1.68c-.294-.613-.267-1.18-.029-1.82h.507a.75.75 0 0 0 0-1.5H13v-2.5h3.971a1.75 1.75 0 0 0 1.604-2.451l-2.363-5.401a2.75 2.75 0 0 0-2.52-1.648zM7.75 19.75c.006.373.092.724.217 1.048.184.473.48.94.723 1.322q.092.144.17.272a.75.75 0 0 0 .64.358h5a.75.75 0 0 0 .64-.358q.076-.126.169-.27c.242-.382.539-.85.723-1.325a3 3 0 0 0 .216-1.047z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_05;
