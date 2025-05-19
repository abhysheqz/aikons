import React from "react";
const SolarSystem_01: React.FC<
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
        d="M12 3.205c-.921 0-1.807.14-2.639.402a.977.977 0 0 1-.586-1.865c1.02-.32 2.103-.492 3.225-.492 5.937 0 10.75 4.813 10.75 10.75 0 2.183-.652 4.216-1.771 5.913a.977.977 0 0 1-1.632-1.076A8.75 8.75 0 0 0 20.795 12 8.795 8.795 0 0 0 12 3.205M4.209 6.019c.458.285.6.888.314 1.346A8.75 8.75 0 0 0 3.205 12 8.795 8.795 0 0 0 12 20.796c.921 0 1.807-.142 2.639-.403a.977.977 0 1 1 .586 1.865c-1.02.32-2.103.492-3.225.492-5.937 0-10.75-4.813-10.75-10.75 0-2.078.59-4.02 1.613-5.666a.977.977 0 0 1 1.346-.315"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 19a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5.5 15a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.167a3.833 3.833 0 0 0-3.757 4.6.958.958 0 0 1-1.878.382A5.75 5.75 0 1 1 12 17.75a.958.958 0 0 1 0-1.917 3.833 3.833 0 1 0 0-7.666"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 12c0-.69.557-1.25 1.244-1.25h.012c.687 0 1.244.56 1.244 1.25s-.557 1.25-1.244 1.25h-.012c-.687 0-1.244-.56-1.244-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarSystem_01;
