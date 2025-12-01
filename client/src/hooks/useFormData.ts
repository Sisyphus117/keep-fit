import { useState } from "react";

export default function useFormData<T>(initialData: T) {
  const [formData, setFormData] = useState(initialData);
  function handleChange(e) {
    const { id, value } = e.target;
    if (!isNaN(+value) && +value < 0) {
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  }
  function simpleHandleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }
  function clearForm() {
    setFormData(initialData);
  }
  return {
    formData,
    setFormData,
    handleChange,
    simpleHandleChange,
    clearForm,
  };
}
