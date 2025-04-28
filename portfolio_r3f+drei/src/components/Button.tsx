interface ButtonProps{name:string,isBeam:boolean,containerClass:string,href?:string}
const Button:React.FC<ButtonProps> = ({ name, isBeam = false, containerClass, href }:ButtonProps) => {
    return (
      <a className={`btn ${containerClass}`} href={href}target = "_blank">
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </a>
    );
  };
  
  export default Button;