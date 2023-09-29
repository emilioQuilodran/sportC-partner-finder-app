import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { ModalContent } from '../pure/ModalContent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AddUserModal = ({ open, onClose, onAddUser }) => {
    const formik = useFormik({
        initialValues: {
          name: '',
          lastname: '',
          birthdate: '',
          identification_number: '',
          gbalocation: false,
        },
        validationSchema: Yup.object({
          name: Yup.string().required('El nombre es requerido'),
          lastname: Yup.string().required('El apellido es requerido'),
          birthdate: Yup.string().required('La fecha de nacimiento es requerida'),
          identification_number: Yup.string().required('El documento es requerido'),
          gbalocation: Yup.boolean().required('Debe indicar si reside en GBA o no'),
        }),
        onSubmit: (values) => {
          onAddUser(values);
          formik.resetForm();
        },
    });
    
    return (
        <ModalContent
            open={open}
            onClose={onClose}
            onSubmit={formik.handleSubmit}
            title="Añadir usuario"
        >
            <TextField
                label="Nombre"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Apellido"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && formik.errors.lastname}
                helperText={formik.touched.lastname && formik.errors.lastname}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Fecha de nacimiento"
                type="date"
                name="birthdate"
                value={formik.values.birthdate}
                onChange={formik.handleChange}
                error={formik.touched.birthdate && formik.errors.birthdate}
                helperText={formik.touched.birthdate && formik.errors.birthdate}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="Documento"
                name="identification_number"
                value={formik.values.identification_number}
                onChange={formik.handleChange}
                error={formik.touched.identification_number && formik.errors.identification_number}
                helperText={formik.touched.identification_number && formik.errors.identification_number}
                fullWidth
                margin="normal"
            />
            <FormGroup>
                <FormControlLabel
                    name="gbalocation"
                    type="checkbox"
                    checked={formik.values.gbalocation}
                    onChange={formik.handleChange}
                    error={formik.touched.gbalocation && formik.errors.gbalocation}
                    helperText={formik.touched.gbalocation && formik.errors.gbalocation}
                    control={<Checkbox defaultChecked color="tertiary" />} label="Reside en GBA" />
            </FormGroup>
        </ModalContent>
    );
};
  
export default AddUserModal;