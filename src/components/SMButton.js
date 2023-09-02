function SMButton({buttonClick,label,id}) {
    return (
    <button id={id} onClick={buttonClick}>{label}</button>
    )}
  
  export default SMButton;