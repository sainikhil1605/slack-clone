import Modal from "@material-ui/core/Modal";
const ModalUI = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
