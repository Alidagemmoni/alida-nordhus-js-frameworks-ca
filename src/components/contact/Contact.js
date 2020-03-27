import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	age: yup
		.number()
		.required()
		.integer()
		.min(10, "Age must be greater than 10")
		.max(30, "Age must be less than 10")
});

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your name" ref={register} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>

			<Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your name" ref={register} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control type="message" name="message" placeholder="Enter your message here" ref={register} />
                {errors.message && <p>{errors.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
	);
}

export default Contact;