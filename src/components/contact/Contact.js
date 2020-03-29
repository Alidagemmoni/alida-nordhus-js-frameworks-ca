import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required").min(2, "Please type more than 2 characters"),
	lastName: yup.string().required("Last name is required").min(2, "Please type more than 2 characters"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter a valid email"),
	message: yup
		.string()
		.required()
		.min(10, "Plese enter a message with more than 10 characters")
});

function Contact() {
    const [ validated, setValidated ] = useState(false);
	const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

	function onSubmit(data, event) {
        console.log("data", data);
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }

	return (
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
            <h1 className="text-dark">Contact us here</h1>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>

			<Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label validated={validated}>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label validated={validated}>Message</Form.Label>
                <Form.Control type="message" name="message" as="textarea" placeholder="Enter your message here" ref={register} />
                {errors.message && <p>{errors.message}</p>}
            </Form.Group>

            <Button variant="outline-success" type="submit">Submit</Button>
        </Form>
	);
}

export default Contact;