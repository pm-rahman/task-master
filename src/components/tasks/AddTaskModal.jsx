import { useForm } from 'react-hook-form';
import Modal from '../../components/ui/Modal';
const AddTaskModal = ({isOpen,setIsOpen}) => {
    const {register,handleSubmit}=useForm();
    const onSubmit =(data)=>{
        console.log(data);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"programming hero"} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")} />
                <button type='submit'>Submit</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;