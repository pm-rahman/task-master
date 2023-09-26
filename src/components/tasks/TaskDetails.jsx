import Modal from "../ui/Modal.jsX";
import TaskCard from "./TaskCard";

const TaskDetails = ({ task, isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Task Details">
      <TaskCard task={task} />
    </Modal>
  );
};

export default TaskDetails;
