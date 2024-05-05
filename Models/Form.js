import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fields: [{
        name: String,
        type: String, 
        options: [String] 
    }]
});

const Form = mongoose.model("Form", formSchema);

export default Form;
