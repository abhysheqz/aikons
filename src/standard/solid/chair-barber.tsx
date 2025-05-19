import React from "react";
const ChairBarber: React.FC<
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
        d="M15.139 3.975c.553-1.885 2.346-3.198 4.344-2.943.312.04.628.095.982.17 1.236.263 1.811 1.579 1.402 2.656L19.8 9.324l-.97 2.564a3.45 3.45 0 0 0-1.956-1.587 33 33 0 0 0-2.766-.778q.03-.35.069-.691l-2.957-.74a1 1 0 0 0-1.242.97v1.099c.699.072 1.443.168 2.19.294 1.71.29 3.257.738 4.301 1.08 1.356.446 1.88 1.972 1.291 3.17A2.31 2.31 0 0 1 15.69 16h-2.724v4.001H14a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h.965v-4H8c-.358 0-.7-.064-1.018-.18v1.18a3 3 0 0 1-3 3H3a1 1 0 1 1 0-2h.982a1 1 0 0 0 1-1v-4q0-.111.023-.215c.091-1.544 1.347-2.837 2.972-2.784v-.94a3 3 0 0 1 3.728-2.91l2.76.69c.195-1.08.433-2.046.674-2.867"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChairBarber;
