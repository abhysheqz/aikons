import React from "react";
const Dollar_02: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v1.045c1.55.143 2.97.612 4.08 1.33 1.336.864 2.337 2.175 2.337 3.773a1 1 0 1 1-2 0c0-.692-.436-1.455-1.423-2.093-.768-.497-1.804-.865-2.994-1v5.668c1.932.076 3.547.39 4.746 1.075.72.412 1.3.963 1.692 1.672.39.705.562 1.509.562 2.382 0 1.924-1.058 3.267-2.584 4.07-1.226.645-2.773.963-4.416 1.052V22a1 1 0 1 1-2 0v-1.039c-1.695-.132-3.248-.598-4.46-1.316C5.116 18.801 4 17.493 4 15.852a1 1 0 1 1 2 0c0 .65.45 1.415 1.56 2.073.88.52 2.072.902 3.44 1.03v-6.271c-1.9-.08-3.392-.403-4.467-1.038-.647-.382-1.15-.882-1.484-1.502-.331-.616-.466-1.295-.466-1.996 0-1.598 1.001-2.91 2.337-3.773 1.11-.718 2.53-1.187 4.08-1.33V2a1 1 0 0 1 1-1m-1 4.056c-1.19.134-2.226.502-2.994.999-.987.638-1.423 1.4-1.423 2.093 0 .445.085.783.227 1.049.14.26.367.507.74.727.663.391 1.752.678 3.45.757zm2 7.669v6.245c1.42-.086 2.618-.362 3.484-.818 1.007-.53 1.516-1.262 1.516-2.3 0-.609-.12-1.064-.313-1.415-.191-.346-.487-.647-.933-.902-.79-.451-2.01-.734-3.754-.81"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dollar_02;
