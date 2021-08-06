import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [services, setServices] = useState({
        name: "",
        price: "",
        image: "",
        description: ""

    })
    const onSubmit = data => {
        const formData = new FormData()

        formData.append('name', services.name)
        formData.append('price', services.price)
        formData.append('description', services.description)
        formData.append('file', services.image)
        fetch(`https://stormy-citadel-51130.herokuapp.com/addService`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("Success")
                }
            })


    };
    const handleChangeProducts = (e) => {
        if (e.target.name === "product_name") {
            const newServices = { ...services }
            newServices.name = e.target.value;
            setServices(newServices)
        }
        if (e.target.name === "product_price") {
            const newServices = { ...services }
            newServices.price = e.target.value;
            setServices(newServices)
        }
        if (e.target.name === "product_description") {
            const newServices = { ...services }
            newServices.description = e.target.value;
            setServices(newServices)
        }
        if (e.target.name === "product_image") {
            const newServices = { ...services }
            newServices.image = e.target.files[0];
            setServices(newServices)
        }


    }


    return (
        <div className='container'>

            <h3 className='ms-5 mt-4'>Enter Service information carefully</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=' ms-md-5 ms-0'>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder={"Enter Service Name"} className="form-control input mt-3 " {...register("product_name", { required: true })} onBlur={handleChangeProducts} />

                    {errors.products_name && <span>This field is required</span>}
                    <input type='text' placeholder={"Enter Service Price"} className="form-control input mt-3 " {...register("product_price", { required: true })} onBlur={handleChangeProducts} />
                    {/* errors will return when field validation fails  */}
                    {errors.product_price && <span>This field is required</span>}
                    <textarea cols="10" rows="10" placeholder="Enter Service Description" className="form-control input mt-3 "{...register("product_description")} onBlur={handleChangeProducts} />
                    <input type="file" className="form-control input mt-3 " {...register("product_image", { required: true })} onBlur={handleChangeProducts} />
                    {/* errors will return when field validation fails  */}
                    {errors.product_image && <span>This field is required</span>}

                    <input type="submit" value="Add Service to Database" className="btn btn-danger mt-3 ms-0 submit-button" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;