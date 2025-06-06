import React from "react";
const MouseRightClick_05: React.FC<
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
        d="M21.25 5.5a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0"
      />
      <path
        fill="currentColor"
        d="M13.692 1.598Q12.481 1.252 11 1.25c-3.2 0-5.356 1.239-6.648 3.337C3.114 6.596 2.75 9.266 2.75 12s.364 5.404 1.602 7.413C5.644 21.511 7.799 22.75 11 22.75s5.356-1.239 6.648-3.337c1.238-2.009 1.602-4.679 1.602-7.413q0-.772-.041-1.522a.973.973 0 0 0-1.025-.92.975.975 0 0 0-.914 1.032l.003.043c.016.286.024.43-.065.523s-.235.094-.527.094H12.6c-.283 0-.424 0-.512-.088S12 10.932 12 10.65V9a1 1 0 1 0-2 0v1.65c0 .283 0 .424-.088.512s-.23.088-.512.088H5.319c-.292 0-.438 0-.527-.094s-.08-.237-.065-.523c.113-2.033.497-3.755 1.274-5.016.683-1.109 1.714-1.934 3.338-2.26.294-.06.441-.089.551.001s.11.249.11.566V5.5a1 1 0 1 0 2 0V3.925c0-.317 0-.476.11-.566s.257-.06.55-.002q.262.053.501.121a.97.97 0 0 0 1.199-.672.98.98 0 0 0-.668-1.208"
      />
      <path
        fill="currentColor"
        d="M10.978 4.75h.044c.214 0 .41 0 .576.011.178.012.373.04.572.122.428.178.77.519.947.947.082.199.11.394.122.572.011.165.011.362.011.576v.544c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122a9 9 0 0 1-.576.011h-.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122 1.75 1.75 0 0 1-.947-.947 1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-.544c0-.214 0-.41.011-.576.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122.165-.011.362-.011.576-.011"
      />
    </svg>
  );
};
export default MouseRightClick_05;
