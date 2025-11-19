import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';
const NoteForm = ({ notes, setNotes }) => {
  // const [title, setTitle] = useState('');
  // const [priority, setPriority] = useState('low');
  // const [category, setCategory] = useState('personal');
  // const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Low',
    category: 'Work',
    description: '',
  });

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
    };
    //Add notes to state
    setNotes([newNote, ...notes]);

    //Reset form data
    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      {/*Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border 
         border-gray-300 text-purple-800 rounded-lg py-2 cursor-pointer hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? 'Hide Form ▲' : 'Add New Note ▼'}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: 'Work' },
              { value: 'Personal', label: 'Personal' },
              { value: 'Ideas', label: 'Ideas' },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={FormData.description}
            onChange={handleChange}
            required={true}
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 cursor-pointer">
            Add note
          </button>
        </form>
      )}
    </>
  );
};
export default NoteForm;
