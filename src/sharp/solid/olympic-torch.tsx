import React from "react";
const OlympicTorch: React.FC<
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
        d="M8.54 6.83a.75.75 0 0 0-.8-.171.76.76 0 0 0-.479.67v.006c-.003.122-.011.466-.011.663a22 22 0 0 0 .073 1.647l-.792-.799-1.06 1.07 9 9.078 1.06-1.07-.793-.8c.585.05 1.236.074 1.633.074.196 0 .537-.008.657-.01h.006a.75.75 0 0 0 .666-.483.76.76 0 0 0-.17-.808zM6.785 13.018l-5.393 7.52a.76.76 0 0 0 .078.978l1.5 1.513c.26.262.671.295.97.078l7.455-5.44zM21.444 1.909 20.7.75l-.567 1.257c-.383.85-.875 1.276-1.417 1.518-.578.257-1.273.33-2.113.353q-.298.008-.625.01c-.65.008-1.366.016-2.043.108-.936.128-1.901.425-2.758 1.146-.485.408-.87.885-1.165 1.394l8.32 8.394a5.5 5.5 0 0 0 1.92-1.031c1.14-.946 1.678-2.15 1.832-2.692l.376-1.318-1.306.382c-.583.171-1.142.172-1.507.053-.177-.057-.274-.13-.323-.19-.041-.048-.078-.117-.078-.249 0-.266.134-.503.579-.841.194-.148.41-.288.661-.45l.114-.073a9 9 0 0 0 .906-.647c.608-.507 1.176-1.215 1.24-2.28.06-1.017-.352-2.21-1.3-3.685"
      />
    </svg>
  );
};
export default OlympicTorch;
