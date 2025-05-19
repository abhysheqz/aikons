import React from "react";
const EuroSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm8.606 5.5A3.356 3.356 0 0 0 10 10.856v.644H8.75a.75.75 0 0 0 0 1.5H10v.644A3.356 3.356 0 0 0 13.356 17c.662 0 1.278-.153 1.815-.489s.949-.824 1.25-1.426a.75.75 0 1 0-1.342-.67c-.199.398-.44.66-.703.824s-.595.261-1.02.261a1.856 1.856 0 0 1-1.856-1.856V13h2.25a.75.75 0 0 0 0-1.5H11.5v-.644C11.5 9.83 12.33 9 13.356 9c.425 0 .757.097 1.02.261.264.165.504.426.703.824a.75.75 0 1 0 1.342-.67c-.301-.602-.714-1.09-1.25-1.426-.537-.336-1.153-.489-1.815-.489"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroSquare;
