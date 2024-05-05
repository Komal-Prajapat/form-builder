  import Form from "../Models/Form.js";

  // create
  export const createForm = async (req, res) => {
    try {
      const { user, fields } = req.body;
      const newForm = new Form({ user, fields });
      await newForm.save();
      res.status(201).json({message:"done" ,user, newForm});
    } catch (error) {
      res.json({message:"error in this"  , error})
      // console.log(error)
      // res.status(500).json({ message: error.message });
    }
  };

  // Controller for getting all forms
  export const getAllForms = async (req, res) => {
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Controller for getting a single form by ID
  export const getFormById = async (req, res) => {
    try {
      const form = await Form.findById(req.params.id);
      if (!form) {
        return res.status(404).json({ message: 'Form not found' });
      }
      res.status(200).json(form);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Controller for updating a form by ID
  export const updateFormById = async (req, res) => {
    try {
      const { user, fields } = req.body;
      const updatedForm = await Form.findByIdAndUpdate(req.params.id, { user, fields }, { new: true });
      if (!updatedForm) {
        return res.status(404).json({ message: 'Form not found' });
      }
      res.status(200).json(updatedForm);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Controller for deleting a form by ID
  export const deleteFormById = async (req, res) => {
    try {
      const deletedForm = await Form.findByIdAndDelete(req.params.id);
      if (!deletedForm) {
        return res.status(404).json({ message: 'Form not found' });
      }
      res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
