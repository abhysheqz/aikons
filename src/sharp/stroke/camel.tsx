import React from "react";
const Camel: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.01 14.5v5.898a.1.1 0 0 1-.1.1H8.682c-.176 0-.24.038-.08-.16l1.4-1.875.001-.008-1-4.455c-1.628.02-2.72-1.142-3.073-1.598-.85-.98-1.396-2.73-1.428-3.81a.1.1 0 0 0-.102-.1H3.05c-.793 0-1.028-.624-1.044-.937 0-1.433 1.104-1.964 1.796-2.055H5.5a.01.01 0 0 0 .009-.006c.613-1.223 1.569-1.012 1.944-.777.764.524.635 1.268.52 1.523-.088.2-.295.494-.409.654l-.002.003c-.098.14-.134.511-.138.583v.388c.072 1.479 1.127 1.738 1.693 1.669 1.51-.26 1.684-1.35 1.98-2.327.181-.597.454-1.167.75-1.716.891-1.65 2.069-2.031 2.617-1.995 1.414-.046 1.89 1.71 2.85 2.844.575.814 1.424 1.355 2.018 2.184m-8.324 4.47c.059 1.125 3.109 2.748 6.5 1.7l.493 3.764v.006L18 18.47l-.94 1.884a.1.1 0 0 0 .09.144h2.756a.1.1 0 0 0 .1-.1V10.38a3.6 3.6 0 0 0-.673-1.853m0 0c.5.043 2.72.904 2.675 3.979"
      />
    </svg>
  );
};
export default Camel;
