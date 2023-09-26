import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/taskSlice";
import Modal from "../ui/Modal.jsX";
const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onCancel = ()=>{
      reset();
      setIsOpen(false);
    }
    const onSubmit = (data) => {
      dispatch(addTask(data));
      onCancel();
    };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            {...register("description")}
            className="w-full rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="dateLine" className="mb-2">
            Date line
          </label>
          <input
            type="date"
            id="dateLine"
            {...register("date")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignedTo" className="mb-2">
            Assign to
          </label>
          <select
            id="assignedTo"
            {...register("assignedTo")}
            className="w-full rounded-md"
          >
            <option value="mokhles">Mokhles</option>
            <option value="rahman">Rahman</option>
            <option value="masrafi">Masrafi</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select
            id="priority"
            {...register("priority")}
            className="w-full rounded-md"
          >
            <option value="hight">Hight</option>
            <option value="medium">Medium</option>
            <option value="log">Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={()=>onCancel()} type="button" className="btn btn-danger">
            cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
