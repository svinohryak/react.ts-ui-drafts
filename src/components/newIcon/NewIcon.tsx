interface IconProps {
  icon: JSX.Element;
}

const NewIcon = ({ icon }: IconProps) => {
  return (
    <div
      style={{
        width: "1rem",
        height: "1rem",
        display: "inline-flex",
        alignItems: "center"
      }}
    >
      {icon}
    </div>
  );
};

export default NewIcon;
