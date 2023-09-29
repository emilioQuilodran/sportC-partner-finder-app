import {mongoose} from '@/pages/api/config/db'

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"El nombre es requerido"],
        minlength:[3,"No menor a 3 caracteres"],
        maxlength:[100,"No mayor a 100 caracteres"],
        trim:true
    },
    lastname: {
        type:String,
        required:[true,"El apellido es requerido"],
        minlength:[3,"No menor a 3 caracteres"],
        maxlength:[100,"No mayor a 100 caracteres"],
        trim:true
    },
    birthdate:{
        type: Date,
        required:[true,"la fecha de nacimiento es requerida"],
        trim:true,
    },
    identification_number:{
        type: Number,
        required:[true,"DNI es requerido"]
    },
    gbalocation:{
        type: Boolean
    }
},
{timestamps: true})

export default mongoose.models?.User || mongoose.model("User", UserSchema)