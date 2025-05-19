import React from "react";
const PyramidMaslowo: React.FC<
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
        d="M12 3.059c-.77 0-1.272.488-1.598.913-.313.407-.633.984-.989 1.625l-.035.064L7.522 9h8.956l-1.856-3.34-.035-.063c-.356-.641-.676-1.218-.989-1.625-.326-.425-.828-.913-1.598-.913M17.59 11H13v11h5.673c.695 0 1.326 0 1.815-.073.516-.077 1.16-.273 1.536-.913s.236-1.298.052-1.787c-.174-.463-.48-1.014-.817-1.622l-.035-.062-.89-1.6A1 1 0 0 1 20 16h-4.5a1 1 0 1 1 0-2h3.755zM11 22V11H6.411l-1.666 3H8.5a1 1 0 1 1 0 2H4a1 1 0 0 1-.335-.057l-.888 1.6-.035.062c-.338.608-.644 1.16-.818 1.622-.184.489-.325 1.146.052 1.787.377.64 1.02.836 1.536.913.49.073 1.12.073 1.815.073z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PyramidMaslowo;
