import React from "react";
const Fork: React.FC<
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
        d="M17.52 1.793a1 1 0 0 1 0 1.414l-1.985 1.984a.657.657 0 1 0 .93.93l2.328-2.328a1 1 0 1 1 1.414 1.414L17.88 7.535a.657.657 0 1 0 .93.93l1.984-1.985a1 1 0 0 1 1.414 1.414l-3.203 3.203a5.42 5.42 0 0 1-3.747 1.587l-.343.005a1.22 1.22 0 0 0-.874.387l-8.038 8.599a2.602 2.602 0 1 1-3.677-3.677l8.598-8.038c.242-.227.382-.542.387-.874l.006-.343a5.42 5.42 0 0 1 1.586-3.748l3.203-3.202a1 1 0 0 1 1.415 0"
      />
    </svg>
  );
};
export default Fork;
