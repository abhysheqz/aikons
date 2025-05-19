import React from "react";
const EuroCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m1.106 6A3.356 3.356 0 0 0 9.5 10.356V11H8.25a.75.75 0 0 0 0 1.5H9.5v.644a3.356 3.356 0 0 0 3.356 3.356c.662 0 1.278-.153 1.815-.489s.949-.824 1.25-1.426a.75.75 0 1 0-1.342-.67c-.199.398-.44.66-.703.824s-.595.261-1.02.261A1.856 1.856 0 0 1 11 13.144V12.5h2.25a.75.75 0 0 0 0-1.5H11v-.644c0-1.025.83-1.856 1.856-1.856.425 0 .757.097 1.02.261.264.165.504.426.703.824a.75.75 0 1 0 1.342-.67c-.301-.602-.714-1.09-1.25-1.426C14.134 7.153 13.518 7 12.856 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroCircle;
