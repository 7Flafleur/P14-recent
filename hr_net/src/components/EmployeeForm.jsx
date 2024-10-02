import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { States } from "../utils/States";
import { addUser } from '../redux/UserListSlice';
import { validName, isValidDob, isValidStartDate, isValidStreet, isUsZipCode } from '../utils/InputValidation';
import Modal from './Modal';

export default function EmployeeForm() {

    const emptyFormState = {
        firstName: '',
        lastName: '',
        dob: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    }

    const textContent = "Employee created!"

    const [formData, setFormData] = useState(emptyFormState);

    const [errors, setErrors] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const dispatch = useDispatch();

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!validName(formData.firstName)) {
            tempErrors.firstName = 'Invalid First Name';
            isValid = false;
        }

        if (!validName(formData.lastName)) {
            tempErrors.lastName = 'Invalid Last Name';
            isValid = false;
        }

        if (!isValidDob(formData.dob)) {
            tempErrors.dob = 'Must be at least 18 years old and not from the future ;)';
            isValid = false;
        }

        if (!isValidStartDate(formData.startDate)) {
            tempErrors.startDate = 'Start Date cannot be in the future';
            isValid = false;
        }

        if (!isValidStreet(formData.street)) {
            tempErrors.street = 'Invalid Street';
            isValid = false;
        }

        if (!validName(formData.city)) {
            tempErrors.city = 'Invalid City';
            isValid = false;
        }

        if (!isUsZipCode(formData.zipCode)) {
            tempErrors.zipCode = 'Invalid Zip Code';
            isValid = false;
        }

        if (!formData.state) {
            tempErrors.state = 'State is required';
            isValid = false;
        }

        if (!formData.department) {
            tempErrors.department = 'Department is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(addUser(formData));
            openModal()

        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData(emptyFormState);
        setErrors({});

    };

    return (
        <div className="employeeform">
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} textContent={textContent} />}
            <form className='outer form' onSubmit={handleSubmit}>
                <label>First name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </label>
                <label>Last name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </label>
                <label>Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}

                    />
                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                </label>
                <label>Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                    />
                    {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
                </label>

                {/* Address Section */}
                <p>Address</p>
                <label>Street:
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                    />
                    {errors.street && <div className="invalid-feedback">{errors.street}</div>}
                </label>
                <label>City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </label>
                <label>State:
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select State</option>
                        {States.map((state) => (
                            <option key={state.abbreviation} value={state.name}>{state.name}</option>
                        ))}
                    </select>
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                </label>
                <label>Zip Code <span className='example'> [ex: '12345' or '12345-1234'] :</span>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        // className="form-control"
                        className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                    />
                    {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                </label>

                <label>Department:
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select Department</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                    {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                </label>
                <button className="save" type="submit">Save</button>
                <button variant="secondary" className="clear" onClick={handleReset}>Clear</button>
            </form>
        </div>
    );
}
