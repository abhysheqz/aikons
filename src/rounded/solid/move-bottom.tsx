import React from "react";
const MoveBottom: React.FC<
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
        d="M12 1.25a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12.033 10.75a1 1 0 0 1 1 1v6h1.33c.146 0 .358 0 .538.025.197.029.715.137.978.652.26.512.035.961-.066 1.13-.09.15-.222.307-.31.413l-.023.027a22 22 0 0 1-1.455 1.595 7 7 0 0 1-.839.715c-.142.1-.304.2-.48.28a1.7 1.7 0 0 1-.706.163 1.7 1.7 0 0 1-.706-.163 3 3 0 0 1-.48-.28 7 7 0 0 1-.84-.715 22 22 0 0 1-1.454-1.595l-.022-.027a3.5 3.5 0 0 1-.31-.414c-.102-.168-.328-.617-.067-1.129.263-.515.78-.623.978-.652.18-.026.392-.025.538-.025h1.396v-6a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default MoveBottom;
