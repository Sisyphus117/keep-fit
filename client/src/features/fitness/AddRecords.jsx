import { useState } from "react";
import Button from "../../ui/components/Button";
import Modal from "../../ui/components/Modal";
import AddRecord from "./AddRecord";
// import { useDispatch, useSelector } from "react-redux";
// import useAuth from "../../hooks/useAuth";
// import useFormData from "../../hooks/useFormData";

function AddRecords() {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();
  // const [isCalculating, setIsCalculating] = useState(false);
  // const { id: user_id } = useAuth();
  // const { weight } = useSelector((store) => store.user);
  // const abortGetCalories = useRef(null);
  // const { formData, setFormData, clearForm, handleChange } = useFormData([
  //   {
  //     temp_id: 0,
  //     item: "",
  //     duration: 0,
  //     calories: 0,
  //   },
  // ]);
  const [records, setRecords] = useState([
    {
      temp_id: 0,
      item: "",
      duration: 0,
      calories: 0,
    },
  ]);
  const [nextId, setNextId] = useState(1);

  function handleAddRecordItem() {
    setRecords((records) => [
      ...records,
      {
        temp_id: nextId,
        item: "",
        duration: 0,
        calories: 0,
      },
    ]);
    setNextId((nextId) => nextId + 1);
  }

  function handleRemoveRecordItem(id) {
    setRecords(records.filter((record) => record.temp_id !== id));
  }

  function handleFormDataChange(id, { key, value }) {
    setRecords(
      records.map((record) => {
        if (record.temp_id === id) {
          record[key] = value;
        }
        return record;
      }),
    );
  }

  function handleSubmit() {}

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Add Records</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>
            {records.map((record) => (
              <AddRecord
                onRemove={handleRemoveRecordItem}
                onFormDataChanged={handleFormDataChange}
                record={record}
                key={record.temp_id}
              />
            ))}
          </div>
          <Button onClick={handleAddRecordItem}>Add</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal>
      )}
    </div>
  );
}

export default AddRecords;
