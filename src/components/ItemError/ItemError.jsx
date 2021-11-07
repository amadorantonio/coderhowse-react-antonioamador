import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";


let ItemError = ({productId}) => {

    let history = useHistory();
    let goBack = () => {
        history.goBack()
    }

    return(
        <>
        <Modal show={true} size="md" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
            <Modal.Header closeButton onClick={goBack}>
                <Modal.Title>Producto no encontrado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Producto con id {productId} no se encuentra en la base de datos de firebase
            </Modal.Body>
        </Modal>
        </>
    )
}

export default ItemError