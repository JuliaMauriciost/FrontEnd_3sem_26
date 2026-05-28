import Swal from "sweetalert2"
import "./Alerta.css"

export const Alerta = ({
    title, 
    text, 
    icon,
    showCancelButton = null,
    confirmButtonText = null,
    cancelButtonText = null,
    confirmButtonColor = "green",
    cancelButtonColor = "red",

}) => {
    return (Swal.fire({
                title,
                text,
                icon,
                showCancelButton : showCancelButton,
                confirmButtonText : confirmButtonText,
                cancelButtonText : cancelButtonText,
                confirmButtonColor: confirmButtonColor,
                cancelButtonColor: cancelButtonColor
            }));
    
};
 export default Alerta