import React from "react";
const CoinsEuro: React.FC<
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
        d="M3.314 7.822c.134-.146.368-.016.335.18A10.3 10.3 0 0 0 3.5 9.75C3.5 15.411 8.09 20 13.75 20q.895 0 1.748-.148c.196-.034.326.2.18.334A8.75 8.75 0 0 1 3.314 7.822"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 1a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m.606 4A3.356 3.356 0 0 0 11 8.356V9h-.25a.75.75 0 0 0 0 1.5H11v.644a3.356 3.356 0 0 0 3.356 3.356c.662 0 1.278-.153 1.815-.489s.949-.824 1.25-1.426a.75.75 0 1 0-1.342-.67c-.199.398-.44.66-.703.824s-.595.261-1.02.261a1.856 1.856 0 0 1-1.856-1.856V10.5h2.25a.75.75 0 0 0 0-1.5H12.5v-.644c0-1.025.83-1.856 1.856-1.856.425 0 .757.097 1.02.261.264.165.504.426.703.824a.75.75 0 1 0 1.342-.67c-.301-.602-.714-1.091-1.25-1.426C15.634 5.153 15.018 5 14.356 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsEuro;
