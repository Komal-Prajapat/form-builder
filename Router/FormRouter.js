import express from 'express';
import { createForm, deleteFormById, getAllForms, getFormById, updateFormById } from '../controllers/FormController.js';
import { authenticate } from '../middlewares/Auth.js';

export const FormRouter = express.Router();

// Route for creating a new form
FormRouter.post('/createforms',authenticate, createForm);

// Route for getting all forms
FormRouter.get('/forms', getAllForms);

// Route for getting a single form by ID
FormRouter.get('/forms/:id', getFormById);

// Route for updating a form by ID
FormRouter.put('/forms/:id', updateFormById);

// Route for deleting a form by ID
FormRouter.delete('/forms/:id', deleteFormById);

// export default FormRouter;
